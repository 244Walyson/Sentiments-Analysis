export declare class CreateCommentDto {
    id: string;
    commentId: string;
    postId: string;
    content: string;
    createdAt: Date;
    constructor(props: Partial<CreateCommentDto>);
}
