import { PostRepositoryInterface } from "../repositories/post.repository.interface";
import { ResponsePostDto } from "../dto/response-post.dto";
export declare class FindPostUseCase {
    private readonly postRepository;
    private readonly logger;
    constructor(postRepository: PostRepositoryInterface);
    execute(id: string, traceId?: string): Promise<ResponsePostDto>;
}
