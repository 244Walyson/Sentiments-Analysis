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
exports.UserRepositoryImpl = void 0;
const prisma_service_1 = require("../../prisma.service");
const common_1 = require("@nestjs/common");
let UserRepositoryImpl = class UserRepositoryImpl {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByEmail(email) {
        return await this.prisma.user.findUnique({ where: { email } });
    }
    async create(data) {
        return await this.prisma.user.create({ data });
    }
    async findAllByCompanyId(companyId) {
        return await this.prisma.user.findMany({
            where: { id: companyId },
        });
    }
    async findOne(id) {
        return await this.prisma.user.findUnique({ where: { id } });
    }
    async update(id, data) {
        return await this.prisma.user.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prisma.user.delete({ where: { id } });
    }
};
exports.UserRepositoryImpl = UserRepositoryImpl;
exports.UserRepositoryImpl = UserRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRepositoryImpl);
//# sourceMappingURL=user.repository.impl.js.map