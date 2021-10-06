import { IUsersRepository } from "../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

interface IRequest{
  id: string;
  username: string;
}

@injectable()
class UpdateUserService{
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ username, id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if(!user) {
      throw new Error("User not found!");
    }
    
    user.username = username;

    await this.usersRepository.create(user);
  }
} 

export { UpdateUserService }