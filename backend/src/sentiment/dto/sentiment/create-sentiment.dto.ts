import { IsNotEmpty } from "class-validator";

export class CreateSentimentDto {
  @IsNotEmpty()
  commentId: string;
  @IsNotEmpty()
  polarity: number;
  @IsNotEmpty()
  sentiment: string;
  @IsNotEmpty()
  coonfidence: number;
  probability: object;
  classPredicted: string;
  logits: object;
  numTokens: number;
  createdAt: Date;

  constructor(props: Partial<CreateSentimentDto>) {
    Object.assign(this, props);
  }
}
