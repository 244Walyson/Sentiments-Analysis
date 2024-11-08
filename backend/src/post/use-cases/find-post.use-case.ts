import { Inject, Injectable } from "@nestjs/common";
import { PostRepositoryInterface } from "../repositories/post.repository.interface";
import { ResponsePostDto } from "../dto/response-post.dto";
import { CustomException } from "../../exceptions/custom.exception";

@Injectable()
export class FindPostUseCase {
  constructor(
    @Inject("PostRepositoryInterface")
    private readonly postRepository: PostRepositoryInterface
  ) {}
  async execute(id: string) {
    try {
      const post = await this.postRepository.findOne(id);
      return new ResponsePostDto({ ...post });
    } catch (error) {
      throw new CustomException("Not Found", "Post Not Found", 400);
    }
  }
}
