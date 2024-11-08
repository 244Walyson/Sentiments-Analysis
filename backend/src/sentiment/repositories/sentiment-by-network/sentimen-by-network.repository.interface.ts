export interface SentimentByNetworkRepositoryInterface {
  create(sentimentByNetwork: any): Promise<any>;
  findAllByCompany(companyId: string): Promise<any[]>;
  findByCompanyAndNetwork(companyId: string, network: string): Promise<any>;
  update(companyId: string, network, sentimentByNetwork: any): Promise<any>;
  delete(id: string): Promise<any>;
}
