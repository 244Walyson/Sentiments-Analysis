import { Inject, Injectable } from "@nestjs/common";
import { SentimentRequestDto } from "../dto/sentiment-by-post/setiment-request.dto";
import { FindPostUseCase } from "src/post/use-cases/find-post.use-case";
import { SentimentByPostRepositoryInterface } from "../repositories/sentiment-by-post/sentiment-by-post.repository.interface";
import { CustomException } from "src/exceptions/custom.exception";
import { SentimentResponseDto } from "../dto/sentiment-by-post/setiment-response.dto";

@Injectable()
export class UpdatePostSentimentUseCase {
  constructor(
    @Inject("SentimentByPostRepositoryInterface")
    private readonly sentimentByPostRepository: SentimentByPostRepositoryInterface,
    private readonly findPostUseCase: FindPostUseCase
  ) {}

  async execute(sentiment: SentimentRequestDto) {
    try {
      const postId = sentiment.postId;
      const post = await this.findPostUseCase.execute(postId);
      let sentimentExists =
        await this.sentimentByPostRepository.findOneByNetwork(post.network);
      if (!sentimentExists) {
        sentimentExists = await this.createSentimentByPost(postId);
      }
      sentimentExists[sentiment.sentiment] += 1;
      sentimentExists.confidence = this.calculateConfidence(
        sentimentExists.confidence,
        sentimentExists.total,
        sentiment.confidence
      );
      sentimentExists.total += 1;
      const updatedSentiment = await this.sentimentByPostRepository.update(
        postId,
        sentiment
      );
      return new SentimentResponseDto({ ...updatedSentiment });
    } catch (error) {
      throw new CustomException("Bad Request", "Error updating sentiment", 400);
    }
  }

  private calculateConfidence(
    currentConfidence: number,
    previousCount: number,
    newConfidence: number
  ): number {
    const newAverageConfidence =
      (currentConfidence * previousCount + newConfidence) / (previousCount + 1);
    return parseFloat(newAverageConfidence.toFixed(3));
  }

  private async createSentimentByPost(postId: string) {
    const sentimentByPost = {
      postId,
      total: 0,
      confidence: 0,
      positive: 0,
      negative: 0,
      neutral: 0,
    };
    return await this.sentimentByPostRepository.create(sentimentByPost);
  }
}
