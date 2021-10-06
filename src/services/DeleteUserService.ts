import { IUsersRepository } from "../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUserService{
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if(!user) {
      throw new Error("User not found!");
    }

    await this.usersRepository.deleteById(id);
  }
}

export { DeleteUserService }