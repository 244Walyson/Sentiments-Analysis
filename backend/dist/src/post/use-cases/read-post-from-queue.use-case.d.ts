import { OnModuleInit } from "@nestjs/common";
import { MessageQueue } from "src/interfaces/message-queue.interface";
import { GetInstagramCommentsUseCase } from "./get-instagram-commets-by-post-id.usecase";
export declare class ReadPostFromQueueUseCase implements OnModuleInit {
    private readonly getInstagremCommentsUseCase;
    private readonly rabbitmqService;
    private readonly logger;
    constructor(getInstagremCommentsUseCase: GetInstagramCommentsUseCase, rabbitmqService: MessageQueue);
    onModuleInit(): Promise<void>;
    execute(): Promise<void>;
}
