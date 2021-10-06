import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository{
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create({id, username, email, password}: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      email,
      password,
      username
    })

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({email});
    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
  
  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne(username);
    return user;
  }

  async deleteById(id: string): Promise<void> {
    const user = await this.repository.delete(id);
  }
} 

export { UsersRepository }