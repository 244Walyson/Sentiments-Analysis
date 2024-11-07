export interface CommentRepositoryInterface {
    create: (comment: any) => Promise<any>;
    update: (id: string, comment: any) => Promise<any>;
    findAllByPost: (id: string) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
