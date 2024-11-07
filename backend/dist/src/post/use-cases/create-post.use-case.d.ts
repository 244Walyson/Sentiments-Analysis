import { PostRepositoryInterface } from "../repositories/post.repository.interface";
import { CreatePostDto } from "../dto/create-post.dto";
import { ResponsePostDto } from "../dto/response-post.dto";
export declare class CreatePostUseCase {
    private readonly postRepository;
    constructor(postRepository: PostRepositoryInterface);
    execute(createPostDto: CreatePostDto): Promise<ResponsePostDto>;
}
