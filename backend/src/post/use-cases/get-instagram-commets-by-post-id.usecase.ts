import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { InstagramRepository } from "../repositories/instagram-client.repository";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { CreateCommentUseCase } from "./create-comment.use-case";
import { ResponsePostDto } from "../dto/response-post.dto";

@Injectable()
export class GetInstagramCommentsUseCase {
  private readonly logger = new Logger(GetInstagramCommentsUseCase.name);
  constructor(
    private readonly instagramClientRepository: InstagramRepository,
    private readonly createCommentUseCase: CreateCommentUseCase
  ) {}

  async execute(post: ResponsePostDto, traceId?: string): Promise<{ message: string; traceId: string }> {
    traceId = traceId || crypto.randomUUID();
    this.logger.log(`[${traceId}] Getting comments for post id: ${post.postId}`);
    const accessToken =
      "IGAB4YHjOso5NBZAE5nbjYxUUl2Mm5vN3pnR2Y3NUhUam4zSEtfVDZAaRmlrbjJ1WXlKN2V3YVhjMjRkM2hKY05xTUZAtNGdkUWZAzcXJkci02WTdtTXR1WDhvZA3VDS3hlVzk1TVhNWktzN1Bqd01mcXF4eURUcDM5eGx3QklOaUN4UDFwSTBEbkFsTmxfMAZDZD";
    let comments: CreateCommentDto[];
    try {
      comments = await this.instagramClientRepository.getCommentsByPostId(
        post.postId,
        accessToken
      );
    } catch (error) {
      this.logger.error(`[${traceId}] Error getting comments: `, error);
      throw new BadRequestException(`[${traceId}] Error getting posts`);
    }
    if (!comments || comments.length === 0) {
      this.logger.error(
        `[${traceId}] No comments found for postId id: `,
        post.postId
      );
      throw new NotFoundException(
        `[${traceId}] No posts found for post id: `,
        post.postId
      );
    }
    await this.saveComments(comments, traceId);
    this.logger.log(
      `[${traceId}] Comment saved successfully for postId id: `,
      post.postId
    );
    return {
      message: "Comment saved successfully",
      traceId,
    };
  }

  private async saveComments(
    comments: CreateCommentDto[],
    traceId: string
  ): Promise<void> {
    for (const comment of comments) {
      await this.createCommentUseCase.execute(comment, traceId);
    }
  }
}
