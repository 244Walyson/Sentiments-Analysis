import { IsNotEmpty } from "class-validator";
import { NetworkEnum } from "../entities/network.enum";

export class CreatePostDto {
  id: string;
  @IsNotEmpty()
  postId: string;
  @IsNotEmpty()
  companyId: string;
  @IsNotEmpty()
  network: NetworkEnum;
  @IsNotEmpty()
  postUrl: string;
  content: String;
  imgUrl: string;
  createdAt: Date;
  engagementScore: Float32Array;
  sentimentScore: Float32Array;
  isActive: boolean;

  constructor(props: Partial<CreatePostDto>) {
    Object.assign(this, props);
  }
}
