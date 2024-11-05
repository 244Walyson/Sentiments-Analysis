import { User } from "../entities/user.entity";

export interface UserRepositoryInterface {
  create: (data: User) => Promise<User>;
  findAllByCompanyId: (id: string) => Promise<User[]>;
  findOne: (id: string) => Promise<User>;
  update: (id: string, data: any) => Promise<User>;
  delete: (id: string) => Promise<void>;
}
