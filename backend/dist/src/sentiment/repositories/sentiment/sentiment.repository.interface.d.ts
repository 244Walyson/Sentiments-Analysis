export interface SentimentRepositoryInterface {
    create(sentiment: any): Promise<any>;
    update(id: string, sentiment: any): Promise<any>;
    delete(id: string): Promise<any>;
}
