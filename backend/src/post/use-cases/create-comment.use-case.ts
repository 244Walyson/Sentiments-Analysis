import { CustomException } from "src/exceptions/custom.exception";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { ResponseCommentDto } from "../dto/response-comment.dto";
import { CommentRepositoryInterface } from "../repositories/comment-repository.interface";
import { FindPostUseCase } from "./find-post.use-case";
import { RabbitMQService } from "src/rabbit-mq/rabbit-mq.service";
import { Inject, Injectable } from "@nestjs/common";
import { Comment } from "../entities/comment.entity";

@Injectable()
export class CreateCommentUseCase {
  constructor(
    @Inject("CommentRepositoryInterface")
    private commentRepository: CommentRepositoryInterface,
    private findPostUseCase: FindPostUseCase,
    private rabbitMqService: RabbitMQService
  ) {}

  async execute(data: CreateCommentDto): Promise<ResponseCommentDto> {
    try {
      await this.findPostUseCase.execute(data.postId);
      const comment = new Comment({ ...data });
      const createdComment = await this.commentRepository.create(data);
      const commentResponse = new ResponseCommentDto({ ...createdComment });
      await this.sendCommentToRabbitMQ(commentResponse);
      return commentResponse;
    } catch (error) {
      console.log(error);
      throw new CustomException("Bad Request", "Error creating comment", 400);
    }
  }

  private async sendCommentToRabbitMQ(comment: ResponseCommentDto) {
    await this.rabbitMqService.publish("comments-queue", comment);
  }
}
