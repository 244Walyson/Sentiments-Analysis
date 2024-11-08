"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentimentByNetworkRepositoryImpl = void 0;
class SentimentByNetworkRepositoryImpl {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(sentimentByNetwork) {
        return await this.prismaService.sentimentByNetwork.create({
            data: sentimentByNetwork,
        });
    }
    async findAllByCompany(companyId) {
        return await this.prismaService.sentimentByNetwork.findMany({
            where: {
                companyId,
            },
        });
    }
    async findByCompanyAndNetwork(companyId, network) {
        return await this.prismaService.sentimentByNetwork.findFirst({
            where: {
                companyId,
                network,
            },
        });
    }
    async update(id, sentimentByNetwork) {
        return await this.prismaService.sentimentByNetwork.update({
            where: {
                id,
            },
            data: sentimentByNetwork,
        });
    }
    async delete(id) {
        return await this.prismaService.sentimentByNetwork.delete({
            where: {
                id,
            },
        });
    }
}
exports.SentimentByNetworkRepositoryImpl = SentimentByNetworkRepositoryImpl;
//# sourceMappingURL=sentimen-by-network.repository.impl.js.map