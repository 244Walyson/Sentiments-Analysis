import { CreatePostDto } from "./dto/create-post.dto";
import { CreateCommentUseCase } from "./use-cases/create-comment.use-case";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreatePostUseCase } from "./use-cases/create-post.use-case";
import { GetInstagramPostUseCase } from "./use-cases/get-instagram-posts-by-user-id.use-case";
export declare class PostController {
    private readonly createCommentUseCase;
    private readonly createPostUseCase;
    private readonly getInstagramPostUseCase;
    constructor(createCommentUseCase: CreateCommentUseCase, createPostUseCase: CreatePostUseCase, getInstagramPostUseCase: GetInstagramPostUseCase);
    createPost(createPostDto: CreatePostDto): Promise<import("./dto/response-post.dto").ResponsePostDto>;
    getPosts(params: {
        userId: string;
    }): Promise<{
        message: string;
        traceId: string;
    }>;
    createComment(commentDto: CreateCommentDto): Promise<import("./dto/response-comment.dto").ResponseCommentDto>;
}
