import { PrismaService } from "../../prisma.service";
import { RefreshTokenRepositoryInterface } from "./refresh-token.repository.interface";
import { RefreshToken } from "../entities/refresh-token.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RefreshTokenRepositoryImpl
  implements RefreshTokenRepositoryInterface
{
  constructor(private readonly prisma: PrismaService) {}

  async create(refreshToken: RefreshToken): Promise<RefreshToken> {
    return await this.prisma.refreshToken.create({ data: refreshToken });
  }

  async revoke(id: string): Promise<any> {
    return await this.prisma.refreshToken.update({
      where: { id },
      data: { revoked: true },
    });
  }

  async findOne(refreshToken: string) {
    return await this.prisma.refreshToken.findFirst({
      where: { refreshToken },
    });
  }

  async revokeAll(userId: string): Promise<any> {
    return await this.prisma.refreshToken.updateMany({
      where: { userId },
      data: { revoked: true },
    });
  }
}
