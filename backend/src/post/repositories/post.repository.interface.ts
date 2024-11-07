export interface PostRepositoryInterface {
  create: (user: any) => Promise<any>;
  update: (id: string, user: any) => Promise<any>;
  findOne: (id: string) => Promise<any>;
  delete: (id: string) => Promise<any>;
}
