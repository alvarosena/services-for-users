import { UsersRepositoryInMemory } from "../repositoryInMemory/UsersRepositoryInMemory";
import { ListAllUsersService } from "../../services/ListAllUsersService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let listAllUsersService: ListAllUsersService;

describe("List all users and your informations", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    listAllUsersService = new ListAllUsersService(usersRepositoryInMemory);
  });

  it("Should be able to list all users", async () => {
    await listAllUsersService.execute();

    const users = await usersRepositoryInMemory.list();
    return users;
  })

});