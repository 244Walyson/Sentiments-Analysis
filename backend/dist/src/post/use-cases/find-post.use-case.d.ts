import { PostRepositoryInterface } from "../repositories/post.repository.interface";
import { ResponsePostDto } from "../dto/response-post.dto";
export declare class FindPostUseCase {
    private readonly postRepository;
    constructor(postRepository: PostRepositoryInterface);
    execute(id: string): Promise<ResponsePostDto>;
}
