import { IsNotEmpty } from "class-validator";

export class RefreshTokenDto {
  @IsNotEmpty()
  refresh_token: string;

  constructor(partial: Partial<RefreshTokenDto>) {
    Object.assign(this, partial);
  }
}
