import { NetworkEnum } from "./enums/network.enum";

export class Post {
  id: string;
  postId: string;
  companyId: string;
  network: NetworkEnum;
  postUrl: string;
  content?: string;
  createdAt: Date;
  isActive: boolean = true;
  mediaType?: string;
  mediaUrls?: string[];

  constructor(props: Partial<Post>) {
    Object.assign(this, props);
  }
}
