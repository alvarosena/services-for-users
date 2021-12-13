import { Router } from "express";
import { authRoutes } from "./authenticate.routes";
import { usersRoutes } from "./user.routes";

const routes = Router();

routes.use('/api/users', usersRoutes);
routes.use('/api/users/oauth', authRoutes);

export { routes }