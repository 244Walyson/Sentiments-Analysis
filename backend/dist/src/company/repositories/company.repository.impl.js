"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRepositoryImpl = void 0;
class CompanyRepositoryImpl {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(company) {
        return await this.prismaService.company.create({ data: company });
    }
    async update(id, company) {
        return await this.prismaService.company.update({
            where: { id },
            data: company,
        });
    }
    async findAll() {
        return await this.prismaService.company.findMany();
    }
    async findById(id) {
        return await this.prismaService.company.findUnique({ where: { id } });
    }
    async delete(id) {
        return await this.prismaService.company.delete({ where: { id } });
    }
}
exports.CompanyRepositoryImpl = CompanyRepositoryImpl;
//# sourceMappingURL=company.repository.impl.js.map