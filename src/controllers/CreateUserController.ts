import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;

    const createUserUseService = container.resolve(CreateUserService);

    await createUserUseService.execute({username, email, password});

    return response.status(201).send();
  }
}

export { CreateUserController }