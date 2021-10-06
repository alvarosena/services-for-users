import { CreateUserService } from "../../services/CreateUserService";
import { UsersRepositoryInMemory } from "../repositoryInMemory/UsersRepositoryInMemory"

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;

describe("Create user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    createUserService = new CreateUserService(usersRepositoryInMemory);
  });

  it("Should be able to create an user", async () => {
    const user = {
      username: "zuck",
      email: "zucknet@fa.com",
      password: "1234",
    }

    await createUserService.execute({
      username: user.username,
      email: user.email,
      password: user.password,
    })

    const userCreated = usersRepositoryInMemory.findByEmail(user.email)

    expect(userCreated).toHaveProperty("id");
  })

  it("Should be not able to create an user with the same email", async () => {
    expect(async () => {
      await createUserService.execute({
        username: "zuck",
        email: "zucknet@fa.com",
        password: "1234",
      }) 
  
      await createUserService.execute({
        username: "zuck",
        email: "zucknet@fa.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(Error);
  })
})