import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, NewsController],
  providers: [AppService, UsersService, NewsService, PrismaService],
})
export class AppModule {}
