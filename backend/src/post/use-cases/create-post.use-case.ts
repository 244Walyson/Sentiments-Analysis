import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from "@nestjs/common";
import { PostRepositoryInterface } from "../repositories/post.repository.interface";
import { CreatePostDto } from "../dto/create-post.dto";
import { ResponsePostDto } from "../dto/response-post.dto";
import { Post } from "../entities/post.entity";
import { MessageQueue } from "src/interfaces/message-queue.interface";

@Injectable()
export class CreatePostUseCase {
  private readonly logger = new Logger(CreatePostUseCase.name);
  constructor(
    @Inject("PostRepositoryInterface")
    private readonly postRepository: PostRepositoryInterface,
    @Inject("MessageQueue")
    private readonly rabbitMqService: MessageQueue
  ) {}
  async execute(
    createPostDto: CreatePostDto,
    traceId?: string
  ): Promise<ResponsePostDto> {
    try {
      traceId = traceId || crypto.randomUUID();
      this.logger.log(
        `[${traceId}] Creating post for company id: ${createPostDto.companyId}`
      );
      await this.postRepository.findOne(createPostDto.companyId);
      const post = new Post({ ...createPostDto });
      const createdPost = await this.postRepository.create(post);
      const response = new ResponsePostDto({ ...createdPost });
      await this.sendPostsToRabbitMQ(response, traceId);
      return response;
    } catch (error) {
      this.logger.error(
        `[${traceId}] Error creating post for userId: ${createPostDto.companyId}`,
        error
      );
      throw new BadRequestException(`[${traceId}] Error creating post`);
    }
  }

  private async sendPostsToRabbitMQ(post: ResponsePostDto, traceId: string) {
    const data = { traceId, ...post };
    await this.rabbitMqService.publish("posts-queue", data, traceId);
  }
}
