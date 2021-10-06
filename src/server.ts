import express from 'express';
import './database';
import "./shared/container";
import { routes } from './routes';


const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: "Hello, World" });
});

app.listen(5555, () => console.log("Running in http://localhost:5555"));