import { Injectable, OnModuleInit, Logger, Inject } from "@nestjs/common";
import { MessageQueue } from "src/interfaces/message-queue.interface";
import { GetInstagramCommentsUseCase } from "./get-instagram-commets-by-post-id.usecase";

@Injectable()
export class ReadPostFromQueueUseCase implements OnModuleInit {
  private readonly logger = new Logger(ReadPostFromQueueUseCase.name);

  constructor(
    private readonly getInstagremCommentsUseCase: GetInstagramCommentsUseCase,
    @Inject("MessageQueue")
    private readonly rabbitmqService: MessageQueue
  ) {}

  async onModuleInit() {
    this.logger.log("Initializing ReadSentimentFromQueueUseCase...");
    await this.rabbitmqService.onModuleInit();
    await this.execute();
  }

  async execute() {
    this.logger.log(`Subscribing to post-queue topic...`);
    await this.rabbitmqService.subscribe("posts-queue", async (message: any) => {
      this.logger.log(`[${message.traceId}] Message received: `, message);
      const response = await this.getInstagremCommentsUseCase.execute(message, message.traceId);
      this.logger.log(JSON.stringify(response));
    });
  }
}
