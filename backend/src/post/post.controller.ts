import {
  Controller,
  Post,
  Body,
  Param,
  HttpCode,
} from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { CreateCommentUseCase } from "./use-cases/create-comment.use-case";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreatePostUseCase } from "./use-cases/create-post.use-case";
import { GetInstagramPostUseCase } from "./use-cases/get-instagram-posts-by-user-id.use-case";
import { trace } from "console";

@Controller("post")
export class PostController {
  constructor(
    private readonly createCommentUseCase: CreateCommentUseCase,
    private readonly createPostUseCase: CreatePostUseCase,
    private readonly getInstagramPostUseCase: GetInstagramPostUseCase
  ) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return await this.createPostUseCase.execute(createPostDto);
  }

  @Post("instagram/:userId")
  @HttpCode(200)
  async getPosts(@Param() params: { userId: string }) {
    return await this.getInstagramPostUseCase.execute(params.userId);
  }

  @Post("comment")
  async createComment(@Body() commentDto: CreateCommentDto) {
    return await this.createCommentUseCase.execute(commentDto);
  }
}
