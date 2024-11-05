export class ResponseUserDto {
  id: string;
  name: string;
  email: string;

  constructor(props: { id: string; name: string; email: string }) {
    Object.assign(this, props);
  }
}
