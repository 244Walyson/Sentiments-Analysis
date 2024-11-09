import { MessageQueue } from "src/interfaces/message-queue.interface";
import { CreateCommentSentimenUseCase } from "./create-comment-sentiment.use-case";
import { UpdatePostSentimentUseCase } from "./update-post-sentiment.use-case";
import { OnModuleInit } from "@nestjs/common";
export declare class ReadSentimentFromQueueUseCase implements OnModuleInit {
    private readonly createSentimentUseCase;
    private readonly updatePostSentimentUseCase;
    private readonly rabbitmqService;
    private readonly logger;
    constructor(createSentimentUseCase: CreateCommentSentimenUseCase, updatePostSentimentUseCase: UpdatePostSentimentUseCase, rabbitmqService: MessageQueue);
    onModuleInit(): Promise<void>;
    execute(): Promise<void>;
}
