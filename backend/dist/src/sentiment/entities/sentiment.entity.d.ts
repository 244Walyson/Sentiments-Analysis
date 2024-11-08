export declare class Sentiment {
    id: string;
    commentId: string;
    polarity: number;
    sentiment: string;
    coonfidence: number;
    probability: object;
    classPredicted: string;
    logits: object;
    numTokens: number;
    createdAt: Date;
    constructor(props: Partial<Sentiment>);
}
