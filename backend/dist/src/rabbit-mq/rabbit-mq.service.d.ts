import { MessageQueue } from "src/interfaces/message-queue.interface";
export declare class RabbitMQService implements MessageQueue {
    private readonly client;
    constructor();
    publish(topic: string, message: any): Promise<void>;
    subscribe(topic: string, callback: (message: any) => void): Promise<void>;
}
