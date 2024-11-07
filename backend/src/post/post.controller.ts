import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { CreateCommentUseCase } from "./use-cases/create-comment.use-case";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreatePostUseCase } from "./use-cases/create-post.use-case";

@Controller("post")
export class PostController {
  constructor(
    private readonly createCommentUseCase: CreateCommentUseCase,
    private readonly createPostUseCase: CreatePostUseCase
  ) {}

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.createPostUseCase.execute(createPostDto);
  }

  @Post("comment")
  createComment(@Body() commentDto: CreateCommentDto) {
    return this.createCommentUseCase.execute(commentDto);
  }
}
