export declare class SentimentByNetworkResponseDto {
    id: string;
    companyId: string;
    network: string;
    polarity: number;
    sentiment: string;
    confidence: number;
    probability: object;
    classPredicted: string;
    logits: object;
    numTokens: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(props: Partial<SentimentByNetworkResponseDto>);
}
