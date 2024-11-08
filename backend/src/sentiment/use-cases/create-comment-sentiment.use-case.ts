import { Inject, Injectable } from "@nestjs/common";
import { SentimentRepositoryInterface } from "../repositories/sentiment/sentiment.repository.interface";
import { Sentiment } from "../entities/sentiment.entity";
import { CreateSentimentDto } from "../dto/sentiment/create-sentiment.dto";
import { CustomException } from "src/exceptions/custom.exception";

@Injectable()
export class CreateCommentSentimenUseCase {
  constructor(
    @Inject("SentimentRepositoryInterface")
    private readonly sentimentRepository: SentimentRepositoryInterface
  ) {}

  async execute(sentiment: CreateSentimentDto) {
    try {
      const sentimentEntity = new Sentiment({ ...sentiment });
      return await this.sentimentRepository.create(sentimentEntity);
    } catch (error) {
      console.log(error);
      throw new CustomException("Bad Request", "Error creating Sentiment", 400);
    }
  }
}
