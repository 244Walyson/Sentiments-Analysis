import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";
import { PrismaService } from "./prisma.service";
import { AuthModule } from "./auth/auth.module";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "./exceptions/http-exception.filter";
import { PostModule } from "./post/post.module";
import { EngagementModule } from "./engagement/engagement.module";
import { AudienceModule } from "./audience/audience.module";
import { SentimentModule } from './sentiment/sentiment.module';
import { RabbitMqModule } from './rabbit-mq/rabbit-mq.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PostModule,
    EngagementModule,
    AudienceModule,
    SentimentModule,
    RabbitMqModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  exports: [PrismaService],
})
export class AppModule {}
