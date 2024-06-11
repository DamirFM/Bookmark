import { Controller } from '@nestjs/common';
// Dependency Injection is a design pattern in which a class requests dependencies from external sources rather than creating them itself.
// Controller will need to call functions from services to perform the business logic.
// To do that, we need to inject the service into the controller using the @Injectable() decorator. 
// Instantiating the service class directly will not work.
@Controller({})
export class AuthController{};