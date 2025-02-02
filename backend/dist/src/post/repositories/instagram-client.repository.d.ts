import { CreatePostDto } from "../dto/create-post.dto";
export declare class InstagramRepository {
    private readonly BASE_URL;
    getUserPosts(companyId: string, accessToken: string): Promise<CreatePostDto[]>;
    private readonly mapInstagramResponseToDto;
    getCommentsByPostId(postId: string, accessToken: string): Promise<any>;
    private readonly mapInstagramCommentResponseToDto;
}
