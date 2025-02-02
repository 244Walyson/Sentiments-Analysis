import { NetworkEnum } from "./enums/network.enum";
export declare class Post {
    id: string;
    postId: string;
    companyId: string;
    network: NetworkEnum;
    postUrl: string;
    content?: string;
    createdAt: Date;
    isActive: boolean;
    mediaType?: string;
    mediaUrls?: string[];
    constructor(props: Partial<Post>);
}
