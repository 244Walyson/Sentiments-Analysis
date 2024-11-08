import { Inject, Injectable } from "@nestjs/common";
import { CustomException } from "src/exceptions/custom.exception";
import { FindCompanyUseCase } from "src/company/use-cases/find-company.use-case";
import { SentimentByNetworkRepositoryInterface } from "../repositories/sentiment-by-network/sentimen-by-network.repository.interface";
import { SentimentByNetworkRequestDto } from "../dto/sentiment-by-network/sentiment-by-network-request.dto";
import { SentimentByNetworkResponseDto } from "../dto/sentiment-by-network/sentiment-by-network-response.dto";

@Injectable()
export class UpdateNetworkSentimentUseCase {
  constructor(
    @Inject("SentimentByNetworkRepositoryInterface")
    private readonly sentimentByNetworkRepository: SentimentByNetworkRepositoryInterface,
    private readonly findCompanyUseCase: FindCompanyUseCase
  ) {}

  async execute(sentiment: SentimentByNetworkRequestDto) {
    try {
      const company = await this.findCompanyUseCase.execute(
        sentiment.companyId
      );
      let currentSentiment =
        await this.sentimentByNetworkRepository.findByCompanyAndNetwork(
          sentiment.companyId,
          sentiment.network
        );
      if (!currentSentiment) {
        currentSentiment = this.createSentimentByNetwork(sentiment);
      }
      currentSentiment[sentiment.sentiment] += 1;
      currentSentiment.confidence = this.calculateConfidence(
        currentSentiment.confidence,
        currentSentiment.total,
        sentiment.confidence
      );
      currentSentiment.total += 1;
      const updatedSentiment = await this.sentimentByNetworkRepository.update(
        currentSentiment.id,
        sentiment
      );
      return new SentimentByNetworkResponseDto({ ...updatedSentiment });
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

  private async createSentimentByNetwork(
    sentiment: SentimentByNetworkRequestDto
  ) {
    const sentimentByNetwork = {
      companyId: sentiment.companyId,
      network: sentiment.network,
      total: 0,
      confidence: 0,
      positive: 0,
      negative: 0,
      neutral: 0,
    };
    return await this.sentimentByNetworkRepository.create(sentimentByNetwork);
  }
}
