import { User } from "../entities/User";
import { ICreateUserDTO } from "./dtos/ICreateUserDTO"

interface IUsersRepository{
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  list(): Promise<User[]>
  findById(id: string): Promise<User> 
  findByUsername(username: string): Promise<User>
  deleteById(id: string): Promise<void>
}

export { IUsersRepository }