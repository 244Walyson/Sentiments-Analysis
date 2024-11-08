export class SentimentResponseDto {
  id: string;
  commentId: string;
  postId: string;
  polarity: number;
  sentiment: string;
  confidence: number;
  probability: object;
  classPredicted: string;
  logits: object;
  numTokens: number;
  createdAt: Date;

  constructor(props: Partial<SentimentResponseDto>) {
    Object.assign(this, props);
  }
}
