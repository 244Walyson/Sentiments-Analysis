"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentimentByPostRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma.service");
let SentimentByPostRepositoryImpl = class SentimentByPostRepositoryImpl {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        return await this.prismaService.sentimentByPost.findMany();
    }
    async findOneByNetwork(network) {
        return await this.prismaService.sentimentByPost.findFirst({
            where: { network },
        });
    }
    async create(sentimentByPost) {
        return await this.prismaService.sentimentByPost.create({
            data: sentimentByPost,
        });
    }
    async update(id, sentimentByPost) {
        return await this.prismaService.sentimentByPost.update({
            where: { id },
            data: sentimentByPost,
        });
    }
    async delete(id) {
        return await this.prismaService.sentimentByPost.delete({ where: { id } });
    }
};
exports.SentimentByPostRepositoryImpl = SentimentByPostRepositoryImpl;
exports.SentimentByPostRepositoryImpl = SentimentByPostRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SentimentByPostRepositoryImpl);
//# sourceMappingURL=sentiment-by-post.repository.impl.js.map