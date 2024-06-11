import { Injectable } from '@nestjs/common';

// The @Injectable() decorator is used to define a class as a provider.
// Injectable work under the hood to make the class available to other parts of the application.    

@Injectable({})
export class AuthService{
    login(){
        return { msg: "I am logged in"}
    }

    signup(){
        return { msg: "I am Signed up"}
    }
};