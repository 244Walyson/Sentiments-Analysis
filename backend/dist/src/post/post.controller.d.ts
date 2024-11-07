import { CreatePostDto } from "./dto/create-post.dto";
import { CreateCommentUseCase } from "./use-cases/create-comment.use-case";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreatePostUseCase } from "./use-cases/create-post.use-case";
export declare class PostController {
    private readonly createCommentUseCase;
    private readonly createPostUseCase;
    constructor(createCommentUseCase: CreateCommentUseCase, createPostUseCase: CreatePostUseCase);
    createPost(createPostDto: CreatePostDto): Promise<import("./dto/response-post.dto").ResponsePostDto>;
    createComment(commentDto: CreateCommentDto): Promise<import("./dto/response-comment.dto").ResponseCommentDto>;
}
