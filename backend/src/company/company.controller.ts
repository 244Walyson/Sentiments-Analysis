import { Controller, Get, Param } from "@nestjs/common";
import { FindCompanyUseCase } from "./use-cases/find-company.use-case";

@Controller("company")
export class CompanyController {
  constructor(private readonly findCompanyUseCase: FindCompanyUseCase) {}

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.findCompanyUseCase.execute(id);
  }
}
