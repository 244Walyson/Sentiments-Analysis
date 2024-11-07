import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { RabbitMQService } from "./rabbit-mq.service";

@Module({
  exports: [RabbitMQService],
  providers: [RabbitMQService],
})
export class RabbitMqModule {}
