export interface CompanyRepositoryInterface {
  create: (company: any) => Promise<any>;
  update: (id: string, company: any) => Promise<any>;
  findAll: () => Promise<any>;
  findById: (id: string) => Promise<any>;
  delete: (id: string) => Promise<any>;
}
