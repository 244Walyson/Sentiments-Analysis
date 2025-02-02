import { NetworkEnum } from "../entities/enums/network.enum";

export class ResponsePostDto {
    id: string;
    postId: string;
    companyId: string;
    network: NetworkEnum;
    postUrl: string;
    mediaUrl: string;
    content: string;
    createdAt: Date;
    isActive: boolean;

  constructor(props: Partial<ResponsePostDto>) {
    Object.assign(this, props);
  }
}
