import { Module } from "@nestjs/common";
import { CompanyController } from "./company.controller";
import { FindCompanyUseCase } from "./use-cases/find-company.use-case";
import { CompanyRepositoryImpl } from "./repositories/company.repository.impl";

@Module({
  controllers: [CompanyController],
  providers: [
    FindCompanyUseCase,
    {
      provide: "CompanyRepositoryInterface",
      useClass: CompanyRepositoryImpl,
    },
  ],
  exports: [FindCompanyUseCase],
})
export class CompanyModule {}
