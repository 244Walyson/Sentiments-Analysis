import { Inject, Injectable } from "@nestjs/common";
import { PostRepositoryInterface } from "../repositories/post.repository.interface";
import { CreatePostDto } from "../dto/create-post.dto";
import { ResponsePostDto } from "../dto/response-post.dto";
import { CustomException } from "src/exceptions/custom.exception";
import { Post } from "../entities/post.entity";

@Injectable()
export class CreatePostUseCase {
  constructor(
    @Inject("PostRepositoryInterface")
    private readonly postRepository: PostRepositoryInterface
  ) {}
  async execute(createPostDto: CreatePostDto) {
    try {
      await this.postRepository.findOne(createPostDto.companyId);
      const post = new Post({ ...createPostDto });
      const createdPost = await this.postRepository.create(post);
      return new ResponsePostDto({ ...createdPost });
    } catch (error) {
      console.log(error);
      throw new CustomException("Bad Request", "Error creating post", 400);
    }
  }
}
