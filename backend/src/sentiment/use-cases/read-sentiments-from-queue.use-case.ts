import { MessageQueue } from "src/interfaces/message-queue.interface";
import { CreateCommentSentimenUseCase } from "./create-comment-sentiment.use-case";
import { CreateSentimentDto } from "../dto/sentiment/create-sentiment.dto";
import { UpdatePostSentimentUseCase } from "./update-post-sentiment.use-case";
import { SentimentRequestDto } from "../dto/sentiment-by-post/setiment-request.dto";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ReadSentimentFromQueueUseCase {
  constructor(
    private readonly createSentimentUseCase: CreateCommentSentimenUseCase,
    private readonly UpdatePostSentimentUseCase: UpdatePostSentimentUseCase,
    @Inject("MessageQueue")
    private readonly rabbitmqService: MessageQueue
  ) {}

  async execute() {
    await this.rabbitmqService.subscribe(
      "comment_sentiment",
      async (message: CreateSentimentDto) => {
        const createdSentiment =
          await this.createSentimentUseCase.execute(message);
        const sentimentRequestDto = new SentimentRequestDto({
          ...createdSentiment,
        });
        await this.UpdatePostSentimentUseCase.execute(sentimentRequestDto);
        return createdSentiment;
      }
    );
  }
}
