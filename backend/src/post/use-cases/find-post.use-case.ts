import { Inject, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { PostRepositoryInterface } from "../repositories/post.repository.interface";
import { ResponsePostDto } from "../dto/response-post.dto";

@Injectable()
export class FindPostUseCase {
  private readonly logger = new Logger(FindPostUseCase.name);
  constructor(
    @Inject("PostRepositoryInterface")
    private readonly postRepository: PostRepositoryInterface
  ) {}
  async execute(id: string, traceId?: string): Promise<ResponsePostDto> {
    try {
      const post = await this.postRepository.findOne(id);
      if (!post) {
        this.logger.error(`[${traceId}] Post not found`);
        throw new NotFoundException(`[${traceId}] Post not found`);
      }
      return new ResponsePostDto({ ...post });
    } catch (error) {
      this.logger.error(`[${traceId}] Error finding post: `, error);
      throw new NotFoundException(`[${traceId}] Error finding post`);
    }
  }
}
