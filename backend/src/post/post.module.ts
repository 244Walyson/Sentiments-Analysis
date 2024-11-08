import { Module } from "@nestjs/common";
import { PostController } from "./post.controller";
import { RabbitMQService } from "../rabbit-mq/rabbit-mq.service";
import { CreatePostUseCase } from "./use-cases/create-post.use-case";
import { CreateCommentUseCase } from "./use-cases/create-comment.use-case";
import { FindPostUseCase } from "./use-cases/find-post.use-case";
import { CommentRepositoryImpl } from "./repositories/comment-repository.impl";
import { PrismaService } from "../prisma.service";
import { PostRepositoryImpl } from "./repositories/post.repository.impl";

@Module({
  controllers: [PostController],
  providers: [
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
    {
      provide: "MessageQueue",
      useClass: RabbitMQService,
    },
  ],
  exports: [FindPostUseCase],
})
export class PostModule {}
