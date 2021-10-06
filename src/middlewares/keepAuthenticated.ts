import { NextFunction, Response, Request } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

interface IPayload{
  sub: string;
}

export async function keepAuthenticated(
  request: Request, 
  response: Response,
  next: NextFunction){
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new Error("Token is missing");
  }

  const [, token] = authHeader.split(" ");

  try{
    const { sub: user_id } = verify(token, "c4a4acd7826638c938c6ff143a2bb72b") as IPayload;

    const usersRespository = new UsersRepository();

    const user = usersRespository.findById(user_id);

    if(!user) {
      throw new Error("User does not exists");
    }

    request.user = {
      id: user_id,
    }

    next();
  } catch {
    throw new Error("Invalid token");
  }

}