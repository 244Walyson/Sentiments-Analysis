import { NetworkEnum } from "../entities/enums/network.enum";
export declare class CreatePostDto {
    postId: string;
    companyId: string;
    network: NetworkEnum;
    postUrl: string;
    content?: string;
    createdAt: Date;
    mediaType?: string;
    mediaUrls?: string[];
    isActive: boolean;
    constructor(props: Partial<CreatePostDto>);
}
