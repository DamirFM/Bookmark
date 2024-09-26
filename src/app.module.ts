// main module of the application. It is the entry point of the application.
// It is responsible for configuring the dependency injection container, setting up the application context, and providing configuration to the application.
// It will also import other modules that contain the application's features.
// https://docs.nestjs.com/modules

// Devide the logic of the application between controllers and services/providers.
// Controllers are responsible for handling incoming requests and returning responses to the client.
// Services are responsible for handling the business logic and interacting with the database.
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],

})
export class AppModule {}
