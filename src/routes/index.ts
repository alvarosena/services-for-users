import { Router } from "express";
import { authRoutes } from "./authenticate.routes";
import { usersRoutes } from "./user.routes";

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/users/oauth', authRoutes);

export { routes }