import { IUsersRepository } from "../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";

@injectable()
class ListAllUsersService{
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersService }
