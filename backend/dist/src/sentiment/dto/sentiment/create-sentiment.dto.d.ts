export declare class CreateSentimentDto {
    commentId: string;
    polarity: number;
    sentiment: string;
    coonfidence: number;
    probability: object;
    classPredicted: string;
    logits: object;
    numTokens: number;
    createdAt: Date;
    constructor(props: Partial<CreateSentimentDto>);
}
