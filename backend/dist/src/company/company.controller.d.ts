import { FindCompanyUseCase } from "./use-cases/find-company.use-case";
export declare class CompanyController {
    private readonly findCompanyUseCase;
    constructor(findCompanyUseCase: FindCompanyUseCase);
    findOne(id: string): Promise<any>;
}
