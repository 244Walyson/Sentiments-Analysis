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
exports.CommentRepositoryImpl = void 0;
const prisma_service_1 = require("../../prisma.service");
const common_1 = require("@nestjs/common");
let CommentRepositoryImpl = class CommentRepositoryImpl {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(comment) {
        return await this.prismaService.comment.create({ data: comment });
    }
    async update(id, comment) {
        return await this.prismaService.comment.update({
            where: { id },
            data: comment,
        });
    }
    async findAllByPost(id) {
        return await this.prismaService.comment.findMany({
            where: { postId: id },
        });
    }
    async delete(id) {
        return await this.prismaService.comment.delete({ where: { id } });
    }
};
exports.CommentRepositoryImpl = CommentRepositoryImpl;
exports.CommentRepositoryImpl = CommentRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentRepositoryImpl);
//# sourceMappingURL=comment-repository.impl.js.map