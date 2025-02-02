import { CreateCommentDto } from "../dto/create-comment.dto";
import { ResponseCommentDto } from "../dto/response-comment.dto";
import { CommentRepositoryInterface } from "../repositories/comment-repository.interface";
import { FindPostUseCase } from "./find-post.use-case";
import { MessageQueue } from "src/interfaces/message-queue.interface";
export declare class CreateCommentUseCase {
    private readonly commentRepository;
    private readonly findPostUseCase;
    private readonly rabbitMqService;
    private readonly logger;
    constructor(commentRepository: CommentRepositoryInterface, findPostUseCase: FindPostUseCase, rabbitMqService: MessageQueue);
    execute(data: CreateCommentDto, traceId?: string): Promise<ResponseCommentDto>;
    private sendCommentToRabbitMQ;
}
