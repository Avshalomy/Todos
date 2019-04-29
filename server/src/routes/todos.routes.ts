import { Router } from 'express';

import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controllers/todo.controller';

export const router = Router();

router
  .route('/')
  .get(getTodos)
  .post(createTodo);

router
  .route('/:id')
  .put(updateTodo)
  .delete(deleteTodo);
  