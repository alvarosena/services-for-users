import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController{
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { username } = request.body;

    const updateUserService = container.resolve(UpdateUserService);

    await updateUserService.execute({ username, id });

    return response.status(204).send();
  }
}

export { UpdateUserController }