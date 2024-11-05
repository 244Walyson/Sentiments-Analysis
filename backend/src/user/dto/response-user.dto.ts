export class ResponseUserDto {
  id: string;
  name: string;
  email: string;
  username: string;
  birthday: Date;
  gender: string;
  phoneNumber: string;
  instagramUrl: string;
  xUrl: string;
  imgUrl: string;
  bio: string;
  cpf: string;
  last_login: Date;
  isActive: boolean;

  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  constructor(props: {
    id?: string;
    name?: string;
    email?: string;
    createdAt?: Date;
    updatedAt?: Date;
    username?: string;
    birthday?: Date;
    gender?: string;
    phoneNumber?: string;
    instagramUrl?: string;
    xUrl?: string;
    imgUrl?: string;
    bio?: string;
    cpf?: string;
    last_login?: Date;
    isActive?: boolean;
  }) {
    Object.assign(this, props);
  }
}
