import { CompanyRepositoryInterface } from "../repositories/company.repository.interface";
export declare class FindCompanyUseCase {
    private readonly companyRepository;
    constructor(companyRepository: CompanyRepositoryInterface);
    execute(id: string): Promise<any>;
}
