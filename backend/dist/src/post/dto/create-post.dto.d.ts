import { NetworkEnum } from "../entities/network.enum";
export declare class CreatePostDto {
    id: string;
    postId: string;
    companyId: string;
    network: NetworkEnum;
    postUrl: string;
    content: String;
    imgUrl: string;
    createdAt: Date;
    engagementScore: Float32Array;
    sentimentScore: Float32Array;
    isActive: boolean;
    constructor(props: Partial<CreatePostDto>);
}
