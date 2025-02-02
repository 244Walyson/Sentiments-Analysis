export class Comment {
  id: string;
  commentId: string;
  postId: string;
  content: string;
  createdAt: Date;
  author: string;
  timestamp: Date;

  constructor(props: Partial<Comment>) {
    Object.assign(this, props);
  }
}
