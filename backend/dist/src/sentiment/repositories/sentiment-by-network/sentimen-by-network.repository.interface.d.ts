export interface SentimentByNetworkRepositoryInterface {
    create(sentimentByNetwork: any): Promise<any>;
    findAllByCompany(companyId: string): Promise<any[]>;
    findByCompanyAndNetwork(companyId: string, network: string): Promise<any>;
    update(id: string, sentimentByNetwork: any): Promise<any>;
    delete(id: string): Promise<any>;
}
