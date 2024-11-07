import { Module } from "@nestjs/common";
import { PostController } from "./post.controller";
import { RabbitMQService } from "src/rabbit-mq/rabbit-mq.service";
import { CreatePostUseCase } from "./use-cases/create-post.use-case";
import { CreateCommentUseCase } from "./use-cases/create-comment.use-case";
import { FindPostUseCase } from "./use-cases/find-post.use-case";
import { PostRepositoryImpl } from "./repositories/post.repository.impl";
import { CommentRepositoryImpl } from "./repositories/comment-repository.impl";
import { PrismaService } from "src/prisma.service";

@Module({
  controllers: [PostController],
  providers: [
    RabbitMQService,
    CreatePostUseCase,
    CreateCommentUseCase,
    FindPostUseCase,
    PrismaService,
    {
      provide: "PostRepositoryInterface",
      useClass: PostRepositoryImpl,
    },
    {
      provide: "CommentRepositoryInterface",
      useClass: CommentRepositoryImpl,
    },
  ],
})
export class PostModule {}
