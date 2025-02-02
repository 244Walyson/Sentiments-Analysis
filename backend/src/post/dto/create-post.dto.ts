import {
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsDateString,
  IsArray,
} from "class-validator";
import { NetworkEnum } from "../entities/enums/network.enum";

export class CreatePostDto {
  @IsNotEmpty()
  postId: string;

  @IsNotEmpty()
  companyId: string;

  @IsNotEmpty()
  @IsEnum(NetworkEnum)
  network: NetworkEnum;

  @IsNotEmpty()
  postUrl: string;

  @IsOptional()
  content?: string;

  @IsNotEmpty()
  @IsDateString()
  createdAt: Date;

  @IsOptional()
  mediaType?: string;

  @IsArray()
  @IsOptional()
  mediaUrls?: string[];

  isActive: boolean = true;

  constructor(props: Partial<CreatePostDto>) {
    Object.assign(this, props);
  }
}
