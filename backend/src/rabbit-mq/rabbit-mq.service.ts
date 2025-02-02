import { Injectable, OnModuleInit, Logger } from "@nestjs/common";
import * as amqp from 'amqplib';
import { MessageQueue } from "src/interfaces/message-queue.interface";

@Injectable()
export class RabbitMQService implements MessageQueue, OnModuleInit {
  private readonly logger = new Logger(RabbitMQService.name);
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  async onModuleInit() {
    await this.connect();
  }

  private async connect() {
    try {
      this.connection = await amqp.connect(process.env.RMQ_URL || 'amqp://localhost:5672');
      this.channel = await this.connection.createChannel();
      this.logger.log('RabbitMQ client connected.');
    } catch (error) {
      this.logger.error('Error connecting to RabbitMQ:', error);
    }
  }

  async subscribe(queue: string, callback: (message: any) => void) {
    try {
      await this.channel.assertQueue(queue, { durable: true });
      this.logger.log(`Subscribed to queue: ${queue}`);

      this.channel.consume(queue, (msg) => {
        if (msg !== null) {
          const content = JSON.parse(msg.content.toString());
          this.logger.log(`Message received from ${queue}: ${JSON.stringify(content)}`);
          callback(content);

          this.channel.ack(msg);
        }
      });
    } catch (error) {
      this.logger.error(`Error subscribing to queue ${queue}:`, error);
    }
  }

  async publish(queue: string, message: any, traceId?: string): Promise<void> {
    try {
      await this.channel.assertQueue(queue, { durable: true });
      this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
        persistent: true,
      });
      this.logger.log(`[${traceId}] Message sent to queue ${queue}: ${JSON.stringify(message)}`);
    } catch (error) {
      this.logger.error(`[${traceId}] Error publishing message to queue ${queue}:`, error);
    }
  }
}
