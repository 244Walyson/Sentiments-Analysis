import { Injectable } from "@nestjs/common";
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from "@nestjs/microservices";
import { MessageQueue } from "src/interfaces/message-queue.interface";

@Injectable()
export class RabbitMQService implements MessageQueue {
  private readonly client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_URL],
        queue: process.env.RMQ_QUEUE_NAME,
        queueOptions: {
          durable: true,
        },
      },
    });
  }

  async publish(topic: string, message: any): Promise<void> {
    this.client.emit(topic, message);
  }

  async subscribe(
    topic: string,
    callback: (message: any) => void
  ): Promise<void> {
    this.client.send(topic, {}).subscribe(callback);
  }
}
