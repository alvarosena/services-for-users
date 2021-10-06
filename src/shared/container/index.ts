import { container } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUserRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

