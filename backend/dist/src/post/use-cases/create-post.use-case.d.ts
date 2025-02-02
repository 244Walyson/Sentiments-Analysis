import { PostRepositoryInterface } from "../repositories/post.repository.interface";
import { CreatePostDto } from "../dto/create-post.dto";
import { ResponsePostDto } from "../dto/response-post.dto";
import { MessageQueue } from "src/interfaces/message-queue.interface";
export declare class CreatePostUseCase {
    private readonly postRepository;
    private readonly rabbitMqService;
    private readonly logger;
    constructor(postRepository: PostRepositoryInterface, rabbitMqService: MessageQueue);
    execute(createPostDto: CreatePostDto, traceId?: string): Promise<ResponsePostDto>;
    private sendPostsToRabbitMQ;
}
