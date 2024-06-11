import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

// @Module decorator is a function that takes a single object as an argument.
// This object has a property called imports, which is an array of other modules that this module depends on.

// For setting up the database we will use Docker. Docker is a platform for developing, shipping, and running applications.
@Module({
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}