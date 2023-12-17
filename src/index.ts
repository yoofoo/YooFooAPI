import express, {Request, Response } from 'express';
import swaggerDocs from './utils/swagger'
import routes from "./routes/routes"

const PORT = 3000;
const app = express();
const port = process.env.PORT || PORT;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log('Hello, TypeScript Express!');
    res.send('Hello, TypeScript Express!');
  });

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  routes(app);
  swaggerDocs(app, PORT);
});