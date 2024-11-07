export class ResponseCommentDto {
  id: string;
  commentId: string;
  postId: string;
  content: string;
  created_at: Date;

  constructor(props: Partial<ResponseCommentDto>) {
    Object.assign(this, props);
  }
}
