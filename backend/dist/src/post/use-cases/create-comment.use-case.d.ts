import { CreateCommentDto } from "../dto/create-comment.dto";
import { ResponseCommentDto } from "../dto/response-comment.dto";
import { CommentRepositoryInterface } from "../repositories/comment-repository.interface";
import { FindPostUseCase } from "./find-post.use-case";
import { MessageQueue } from "src/interfaces/message-queue.interface";
export declare class CreateCommentUseCase {
    private commentRepository;
    private findPostUseCase;
    private rabbitMqService;
    constructor(commentRepository: CommentRepositoryInterface, findPostUseCase: FindPostUseCase, rabbitMqService: MessageQueue);
    execute(data: CreateCommentDto): Promise<ResponseCommentDto>;
    private sendCommentToRabbitMQ;
}
