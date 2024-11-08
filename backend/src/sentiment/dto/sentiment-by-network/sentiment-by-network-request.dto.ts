export class SentimentByNetworkRequestDto {
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

    constructor(props: Partial<SentimentByNetworkRequestDto>) {
      Object.assign(this, props);
    }

}