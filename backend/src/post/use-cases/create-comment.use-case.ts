import { CreateCommentDto } from "../dto/create-comment.dto";
import { ResponseCommentDto } from "../dto/response-comment.dto";
import { CommentRepositoryInterface } from "../repositories/comment-repository.interface";
import { FindPostUseCase } from "./find-post.use-case";
import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from "@nestjs/common";
import { Comment } from "../entities/comment.entity";
import { MessageQueue } from "src/interfaces/message-queue.interface";

@Injectable()
export class CreateCommentUseCase {
  private readonly logger = new Logger(CreateCommentUseCase.name);
  constructor(
    @Inject("CommentRepositoryInterface")
    private readonly commentRepository: CommentRepositoryInterface,
    private readonly findPostUseCase: FindPostUseCase,
    @Inject("MessageQueue")
    private readonly rabbitMqService: MessageQueue
  ) {}

  async execute(
    data: CreateCommentDto,
    traceId?: string
  ): Promise<ResponseCommentDto> {
    try {
      traceId = traceId || crypto.randomUUID();
      this.logger.log(
        `[${traceId}] Creating comment for post id: ${data.postId}`
      );
      await this.findPostUseCase.execute(data.postId, traceId);
      const comment = new Comment({ ...data });
      const createdComment = await this.commentRepository.create(comment);
      const commentResponse = new ResponseCommentDto({ ...createdComment });
      await this.sendCommentToRabbitMQ(commentResponse, traceId);
      this.logger.log(
        `[${traceId}] Comment created successfully for post id: ${data.postId}`
      );
      return commentResponse;
    } catch (error) {
      this.logger.error(`[${traceId}] Error creating comment: `, error);
      throw new BadRequestException(`[${traceId}] Error creating comment`);
    }
  }

  private async sendCommentToRabbitMQ(
    comment: ResponseCommentDto,
    traceId?: string
  ) {
    const data = { traceId, ...comment };
    await this.rabbitMqService.publish("comments-queue", data, traceId);
  }
}
