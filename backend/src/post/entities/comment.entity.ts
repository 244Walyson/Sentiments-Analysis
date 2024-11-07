export class Comment {
  id: string;
  commentId: string;
  postId: string;
  content: string;
  createdAt: Date;

  constructor(props: Partial<Comment>) {
    Object.assign(this, props);
  }
}
