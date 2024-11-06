export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  username: string;
  birthday: Date;
  gender: string;
  phoneNumber: string;
  instagramUrl: string;
  xUrl: string;
  imgUrl: string;
  bio: string;
  cpf: string;
  lastLogin: Date;
  isActive: boolean;

  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  constructor(props: Partial<User>) {
    this.id = props.id ?? crypto.randomUUID();
    Object.entries(props).forEach(([key, value]) => {
      this[key] = value ?? null;
    });
  }
}
