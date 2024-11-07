import { IsNotEmpty } from "class-validator";

export class CreateCommentDto {
  id: string;
  @IsNotEmpty()
  commentId: string;
  @IsNotEmpty()
  postId: string;
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  createdAt: Date;

  constructor(props: Partial<CreateCommentDto>) {
    Object.assign(this, props);
  }
}
