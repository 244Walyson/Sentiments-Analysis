import { Module } from "@nestjs/common";
import { SentimentController } from "./sentiment.controller";
import { SentimentRepositoryImpl } from "./repositories/sentiment/sentiment.respository.impl";

@Module({
  controllers: [SentimentController],
  providers: [
    ,
    {
      provide: "SentimentRepositoryInterface",
      useClass: SentimentRepositoryImpl,
    },
  ],
})
export class SentimentModule {}
