export class SentimentByNetwork {
  id: string;
  companyId: string;
  network: string;
  positive: number;
  negative: number;
  neutral: number;
  confidence: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: Partial<SentimentByNetwork>) {
    Object.assign(this, props);
  }
}
