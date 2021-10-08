import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUserRepository";
import { ICreateUserDTO } from "../repositories/dtos/ICreateUserDTO";
import { hash } from "bcrypt";
import { AppError } from "../errors/AppError";

@injectable()
class CreateUserService{
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ username, email, password}: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists) {
      throw new AppError("Email already taken!");
    }

    if(!password || !email) {
      throw new AppError("Email or password is incorrect!");
    }

    const hashPassword = await hash(password, 10);

    await this.usersRepository.create({
      username,
      email,
      password: hashPassword,
    })
  }
}

export { CreateUserService }