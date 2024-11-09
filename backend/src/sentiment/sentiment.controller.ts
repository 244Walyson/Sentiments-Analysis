import { Controller, Inject } from "@nestjs/common";
import { Ctx, EventPattern, Payload, RmqContext } from "@nestjs/microservices";

@Controller()
export class SentimentController {
  constructor() {}
  @EventPattern("comment_sentiment")
  async handle(
    @Payload() payload: any,
    @Ctx() context: RmqContext
  ): Promise<void> {
    console.log(payload);
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    try {
      console.log("Message received:", payload);
    } catch (error) {
      console.log(error);
    }
    channel.ack(originalMsg);
  }
}
