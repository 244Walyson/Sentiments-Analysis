export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  constructor(props: {
    id?: string;
    name: string;
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = props.id ?? crypto.randomUUID();
    Object.assign(this, props);
  }
}
