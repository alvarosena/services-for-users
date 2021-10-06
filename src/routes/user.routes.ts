import { Router } from "express";
import { ListAllUsersController } from "../controllers/ListAllUsersController";
import { CreateUserController } from "../controllers/CreateUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { keepAuthenticated } from "../middlewares/keepAuthenticated";
import { DeleteUserController } from "../controllers/DeleteUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();


usersRoutes.post('/', createUserController.handle);
usersRoutes.get('/', listAllUsersController.handle);
usersRoutes.patch('/', keepAuthenticated, updateUserController.handle);
usersRoutes.delete('/', keepAuthenticated, deleteUserController.handle);

export { usersRoutes }