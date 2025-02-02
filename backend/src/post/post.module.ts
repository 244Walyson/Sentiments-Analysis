import { Module } from "@nestjs/common";
import { PostController } from "./post.controller";
import { RabbitMQService } from "../rabbit-mq/rabbit-mq.service";
import { CreatePostUseCase } from "./use-cases/create-post.use-case";
import { CreateCommentUseCase } from "./use-cases/create-comment.use-case";
import { FindPostUseCase } from "./use-cases/find-post.use-case";
import { CommentRepositoryImpl } from "./repositories/comment-repository.impl";
import { PrismaService } from "../prisma.service";
import { PostRepositoryImpl } from "./repositories/post.repository.impl";
import { GetInstagramPostUseCase } from "./use-cases/get-instagram-posts-by-user-id.use-case";
import { InstagramRepository } from "./repositories/instagram-client.repository";
import { GetInstagramCommentsUseCase } from "./use-cases/get-instagram-commets-by-post-id.usecase";
import { ReadPostFromQueueUseCase } from "./use-cases/read-post-from-queue.use-case";

@Module({
  controllers: [PostController],
  providers: [
    CreatePostUseCase,
    CreateCommentUseCase,
    FindPostUseCase,
    GetInstagramPostUseCase,
    GetInstagramCommentsUseCase,
    InstagramRepository,
    PrismaService,
    ReadPostFromQueueUseCase,
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
