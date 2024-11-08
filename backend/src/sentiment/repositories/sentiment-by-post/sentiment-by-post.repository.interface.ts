export interface SentimentByPostRepositoryInterface {
  findAll(): Promise<any>;
  findOneByNetwork(network: string): Promise<any>;
  create(sentimentByPost: any): Promise<any>;
  update(id: string, sentimentByPost: any): Promise<any>;
  delete(id: string): Promise<any>;
}
