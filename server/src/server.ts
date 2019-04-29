import express            from 'express';
import * as bodyParser    from 'body-parser';
import { default as cors} from "cors";

import { notFoundError, errorHandler } from './middlewares/errors.middleware';
import { router as todosRoutes }       from './routes/todos.routes';

const app  = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => res.json({ Todos: 'service up and running ...' }));


app.use('/api/todos', todosRoutes);


app.use(notFoundError);
app.use(errorHandler);


export const server = async () => {
  await app.listen(process.env.PORT || 5000);
  console.log(`Server started at http://localhost:${process.env.PORT || 5000}`);
  console.log(`Press Ctrl+C to quit`);
};
