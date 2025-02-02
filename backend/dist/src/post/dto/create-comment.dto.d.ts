export declare class CreateCommentDto {
    id: string;
    commentId: string;
    postId: string;
    content: string;
    author: string;
    timestamp: Date;
    createdAt: Date;
    constructor(props: Partial<CreateCommentDto>);
}
