import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { CreatePostDto } from "../dto/create-post.dto";
import { InstagramRepository } from "../repositories/instagram-client.repository";
import { CreatePostUseCase } from "./create-post.use-case";

@Injectable()
export class GetInstagramPostUseCase {
  private readonly logger = new Logger(GetInstagramPostUseCase.name);
  constructor(
    private readonly instagramClientRepository: InstagramRepository,
    private readonly createPostUseCase: CreatePostUseCase
  ) {}

  async execute(userId: string): Promise<{ message: string; traceId: string }> {
    const traceId = crypto.randomUUID();
    this.logger.log(`[${traceId}] Getting posts for user id: ${userId}`);
    const accessToken =
      "IGAB4YHjOso5NBZAE5nbjYxUUl2Mm5vN3pnR2Y3NUhUam4zSEtfVDZAaRmlrbjJ1WXlKN2V3YVhjMjRkM2hKY05xTUZAtNGdkUWZAzcXJkci02WTdtTXR1WDhvZA3VDS3hlVzk1TVhNWktzN1Bqd01mcXF4eURUcDM5eGx3QklOaUN4UDFwSTBEbkFsTmxfMAZDZD";
    let posts: CreatePostDto[];
    try {
      posts = await this.instagramClientRepository.getUserPosts(
        userId,
        accessToken
      );
    } catch (error) {
      this.logger.error(`[${traceId}] Error getting posts: }`, error);
      throw new BadRequestException(`[${traceId}] Error getting posts`);
    }
    if (!posts || posts.length === 0) {
      this.logger.error(`[${traceId}] No posts found for user id: `, userId);
      throw new NotFoundException(
        `[${traceId}] No posts found for user id: `,
        userId
      );
    }
    await this.savePosts(posts, traceId);
    this.logger.log(
      `[${traceId}] Posts saved successfully for user id: `,
      userId
    );
    return {
      message: "Posts saved successfully",
      traceId,
    };
  }

  private async savePosts(
    posts: CreatePostDto[],
    traceId: string
  ): Promise<void> {
    for (const post of posts) {
      await this.createPostUseCase.execute(post);
    }
  }
}
