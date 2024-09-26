import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

// The @Injectable() decorator is used to define a class as a provider.
// Injectable work under the hood to make the class available to other parts of the application.    

@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService) {}
    login(){
        return { msg: "I am logged in"}
    }

    signup(){
        return { msg: "I am Signed up"}
    }
};