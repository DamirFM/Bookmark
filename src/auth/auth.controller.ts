import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
// Dependency Injection is a design pattern in which a class requests dependencies from external sources rather than creating them itself.
// Controller will need to call functions from services to perform the business logic.
// To do that, we need to inject the service into the controller using the @Injectable() decorator. 
// Instantiating the service class directly will not work.
@Controller('auth')
export class AuthController{
    // Give me the instance of AuthService class
    constructor(private authService: AuthService){}
    // The login() method will call the login() method from the AuthService class.
    // let's create endpoints for the login and signup methods.
    // As we expect POST for both login and signup, we will use the @Post() decorator.
    @Post('login')
    login(@Req() req: Request){
        console.log(req.body)
        return this.authService.login()
    }

    @Post('signup')
    signup(){
        return this.authService.signup()
    }
};