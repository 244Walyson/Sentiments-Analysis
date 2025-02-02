import { OnModuleInit } from "@nestjs/common";
import { MessageQueue } from "src/interfaces/message-queue.interface";
export declare class RabbitMQService implements MessageQueue, OnModuleInit {
    private readonly logger;
    private connection;
    private channel;
    onModuleInit(): Promise<void>;
    private connect;
    subscribe(queue: string, callback: (message: any) => void): Promise<void>;
    publish(queue: string, message: any, traceId?: string): Promise<void>;
}
