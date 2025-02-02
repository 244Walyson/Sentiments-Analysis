import { InstagramRepository } from "../repositories/instagram-client.repository";
import { CreateCommentUseCase } from "./create-comment.use-case";
import { ResponsePostDto } from "../dto/response-post.dto";
export declare class GetInstagramCommentsUseCase {
    private readonly instagramClientRepository;
    private readonly createCommentUseCase;
    private readonly logger;
    constructor(instagramClientRepository: InstagramRepository, createCommentUseCase: CreateCommentUseCase);
    execute(post: ResponsePostDto, traceId?: string): Promise<{
        message: string;
        traceId: string;
    }>;
    private saveComments;
}
