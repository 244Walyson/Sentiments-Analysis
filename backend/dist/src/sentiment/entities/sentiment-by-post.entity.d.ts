export declare class SentimentByPost {
    id: string;
    postId: string;
    neutral: number;
    positive: number;
    negative: number;
    confidence: number;
    totalComments: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(props: Partial<SentimentByPost>);
}
