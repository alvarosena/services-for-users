import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../repositories/dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";


class UsersRepositoryInMemory implements IUsersRepository{
  users: User[] = [];

  async create({id, username, email, password}: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      id,
      username,
      email,
      password
    });

    await this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.users.find(user => user.email === email);
    return user;
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.users.find(user => user.id === id);
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.users.find(user => user.username === username);
    return user;
  }

  async deleteById(id: string): Promise<void> {
    const user = await this.users.splice(0, 1);
  }

}

export { UsersRepositoryInMemory }