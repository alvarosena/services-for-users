import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import "express-async-errors"
import './database';
import "./shared/container";
import { routes } from './routes';
import { AppError } from './errors/AppError';


const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.get('/', (request, response) => {
  return response.json([
    { message: "Connected!" }
  ]);
});


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server error ${err.message}`
  })
})

app.listen(5555, () => console.log("Running"));