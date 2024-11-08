"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentimentRepositoryImpl = void 0;
class SentimentRepositoryImpl {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(sentiment) {
        return await this.prismaService.sentiment.create({ data: sentiment });
    }
    async update(id, sentiment) {
        return await this.prismaService.sentiment.update({
            where: { id },
            data: sentiment,
        });
    }
    async delete(id) {
        return await this.prismaService.sentiment.delete({ where: { id } });
    }
}
exports.SentimentRepositoryImpl = SentimentRepositoryImpl;
//# sourceMappingURL=sentiment.respository.impl.js.map