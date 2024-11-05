import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDate,
  IsUrl,
  IsPhoneNumber,
  Length,
} from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "Name must not be empty" })
  @IsString({ message: "Name must be a string" })
  name: string;

  @IsNotEmpty({ message: "Email must not be empty" })
  @IsEmail({}, { message: "Email must be a valid email address" })
  email: string;

  @IsNotEmpty({ message: "Password must not be empty" })
  @IsString({ message: "Password must be a string" })
  @Length(6, undefined, { message: "Password must have at least 6 characters" })
  password: string;

  @IsNotEmpty({ message: "Username must not be empty" })
  @IsString({ message: "Username must be a string" })
  username: string;

  @IsOptional()
  @IsDate({ message: "Birthday must be a valid date" })
  birthday: Date;

  @IsOptional()
  @IsString({ message: "Gender must be a string" })
  gender: string;

  @IsOptional()
  @IsPhoneNumber(null, { message: "Phone number must be valid" }) // O parâmetro pode ser o código do país se necessário
  phoneNumber: string;

  @IsOptional()
  @IsUrl({}, { message: "Instagram URL must be a valid URL" })
  instagramUrl: string;

  @IsOptional()
  @IsUrl({}, { message: "X URL must be a valid URL" })
  xUrl: string;

  @IsOptional()
  @IsUrl({}, { message: "Image URL must be a valid URL" })
  imgUrl: string;

  @IsOptional()
  @IsString({ message: "Bio must be a string" })
  bio: string;

  @IsOptional()
  @IsString({ message: "CPF must be a string" })
  cpf: string;

  constructor(props: {
    name?: string;
    email?: string;
    username?: string;
    password?: string;
    birthday?: Date;
    gender?: string;
    phoneNumber?: string;
    instagramUrl?: string;
    xUrl?: string;
    imgUrl?: string;
    bio?: string;
    cpf?: string;
  }) {
    Object.assign(this, props);
  }
}
