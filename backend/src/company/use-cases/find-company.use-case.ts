import { Inject } from "@nestjs/common";
import { CompanyRepositoryInterface } from "../repositories/company.repository.interface";
import { CustomException } from "src/exceptions/custom.exception";

export class FindCompanyUseCase {
  constructor(
    @Inject("CompanyRepositoryInterface")
    private readonly companyRepository: CompanyRepositoryInterface
  ) {}

  async execute(id: string) {
    try {
      return await this.companyRepository.findById(id);
    } catch (error) {
      console.log(error);
      throw new CustomException("Not Found", "Company not found", 404);
    }
  }
}
