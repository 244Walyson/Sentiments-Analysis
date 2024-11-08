import { Module } from "@nestjs/common";
import { SentimentController } from "./sentiment.controller";
import { SentimentRepositoryImpl } from "./repositories/sentiment/sentiment.respository.impl";
import { CreateCommentSentimenUseCase } from "./use-cases/create-comment-sentiment.use-case";
import { ReadSentimentFromQueueUseCase } from "./use-cases/read-sentiments-from-queue.use-case";
import { UpdatePostSentimentUseCase } from "./use-cases/update-post-sentiment.use-case";
import { UpdateNetworkSentimentUseCase } from "./use-cases/update-network-sentiment.use-case";
import { SentimentByPostRepositoryImpl } from "./repositories/sentiment-by-post/sentiment-by-post.repository.impl";
import { SentimentByNetworkRepositoryImpl } from "./repositories/sentiment-by-network/sentimen-by-network.repository.impl";
import { RabbitMQService } from "src/rabbit-mq/rabbit-mq.service";
import { FindPostUseCase } from "src/post/use-cases/find-post.use-case";
import { FindCompanyUseCase } from "src/company/use-cases/find-company.use-case";
import { PostModule } from "src/post/post.module";
import { CompanyModule } from "src/company/company.module";
import { PrismaService } from "src/prisma.service";

@Module({
  imports: [PostModule, CompanyModule],
  controllers: [SentimentController],
  providers: [
    CreateCommentSentimenUseCase,
    ReadSentimentFromQueueUseCase,
    UpdatePostSentimentUseCase,
    UpdateNetworkSentimentUseCase,
    PrismaService,
    {
      provide: "MessageQueue",
      useClass: RabbitMQService,
    },
    {
      provide: "SentimentRepositoryInterface",
      useClass: SentimentRepositoryImpl,
    },
    {
      provide: "SentimentByPostRepositoryInterface",
      useClass: SentimentByPostRepositoryImpl,
    },
    {
      provide: "SentimentByNetworkRepositoryInterface",
      useClass: SentimentByNetworkRepositoryImpl,
    },
  ],
})
export class SentimentModule {}
