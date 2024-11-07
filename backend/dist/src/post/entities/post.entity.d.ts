import { NetworkEnum } from "./network.enum";
export declare class Post {
    id: string;
    postId: string;
    companyId: string;
    network: NetworkEnum;
    postUrl: string;
    content: String;
    createdAt: Date;
    engagementScore: Float32Array;
    sentimentScore: Float32Array;
    isActive: boolean;
    constructor(props: Partial<Post>);
}
