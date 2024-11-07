import { NetworkEnum } from "../entities/network.enum";

export class ResponsePostDto {
  id: string;
  company_id: string;
  network: NetworkEnum;
  post_url: string;
  content: String;
  created_at: Date;
  engagement_score: Float32Array;
  sentiment_score: Float32Array;
  is_active: boolean;

  constructor(props: Partial<ResponsePostDto>) {
    Object.assign(this, props);
  }
}
