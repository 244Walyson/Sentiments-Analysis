export class RefreshTokenDto {
  refresh_token: string;

  constructor({ refresh_token }) {
    this.refresh_token = refresh_token;
  }
}
