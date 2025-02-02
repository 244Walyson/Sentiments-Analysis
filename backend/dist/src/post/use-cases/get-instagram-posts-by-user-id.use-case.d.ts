import { InstagramRepository } from "../repositories/instagram-client.repository";
import { CreatePostUseCase } from "./create-post.use-case";
export declare class GetInstagramPostUseCase {
    private readonly instagramClientRepository;
    private readonly createPostUseCase;
    private readonly logger;
    constructor(instagramClientRepository: InstagramRepository, createPostUseCase: CreatePostUseCase);
    execute(userId: string): Promise<{
        message: string;
        traceId: string;
    }>;
    private savePosts;
}
