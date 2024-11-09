import { MessageQueue } from "src/interfaces/message-queue.interface";
import { CreateCommentSentimenUseCase } from "./create-comment-sentiment.use-case";
import { CreateSentimentDto } from "../dto/sentiment/create-sentiment.dto";
import { UpdatePostSentimentUseCase } from "./update-post-sentiment.use-case";
import { SentimentRequestDto } from "../dto/sentiment-by-post/setiment-request.dto";
import { Inject, Injectable, OnModuleInit, Logger } from "@nestjs/common";

@Injectable()
export class ReadSentimentFromQueueUseCase implements OnModuleInit {
  private readonly logger = new Logger(ReadSentimentFromQueueUseCase.name);

  constructor(
    private readonly createSentimentUseCase: CreateCommentSentimenUseCase,
    private readonly updatePostSentimentUseCase: UpdatePostSentimentUseCase,
    @Inject("MessageQueue")
    private readonly rabbitmqService: MessageQueue
  ) {}

  async onModuleInit() {
    this.logger.log("Initializing ReadSentimentFromQueueUseCase...");
    await this.rabbitmqService.onModuleInit();
    await this.execute();
  }

  async execute() {
    this.logger.log("Subscribing to comment_sentiment topic...");
    await this.rabbitmqService.subscribe(
      "comment_sentiment",
      async (message: CreateSentimentDto) => {
        this.logger.log("Message received:", message);
        const createdSentiment =
          await this.createSentimentUseCase.execute(message);
        const sentimentRequestDto = new SentimentRequestDto({
          ...createdSentiment,
        });
        await this.updatePostSentimentUseCase.execute(sentimentRequestDto);
        return createdSentiment;
      }
    );
  }
}
