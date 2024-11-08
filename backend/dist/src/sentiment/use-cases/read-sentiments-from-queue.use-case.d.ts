import { MessageQueue } from "src/interfaces/message-queue.interface";
import { CreateCommentSentimenUseCase } from "./create-comment-sentiment.use-case";
import { UpdatePostSentimentUseCase } from "./update-post-sentiment.use-case";
export declare class ReadSentimentFromQueueUseCase {
    private readonly createSentimentUseCase;
    private readonly UpdatePostSentimentUseCase;
    private readonly rabbitmqService;
    constructor(createSentimentUseCase: CreateCommentSentimenUseCase, UpdatePostSentimentUseCase: UpdatePostSentimentUseCase, rabbitmqService: MessageQueue);
    execute(): Promise<void>;
}
