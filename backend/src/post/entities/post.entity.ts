import { Company } from "src/company/entities/company.entity";
import { NetworkEnum } from "./network.enum";

export class Post {
  id: string;
  postId: string;
  companyId: string;
  network: NetworkEnum;
  postUrl: string;
  content: String;
  createdAt: Date;
  engagementScore: Float32Array;
  sentimentScore: Float32Array;
  isActive: boolean = true;

  constructor(props: Partial<Post>) {
    Object.assign(this, props);
  }
}
