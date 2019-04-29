import { Request, Response } from "express";
import Todo, { ITodo } from '../models/todo.model';



// C
export const createTodo = async (req: Request, res: Response, next: Function) => {
    try {
        const todo: ITodo = await Todo.create(req.body);
        res.status(201).json({id: todo._id, name: todo.name});
    } catch (err) {
        console.log("MongoDB - Create Todo Error:", err);
        next(err);
    }
};


// R
export const getTodos = async (req: Request, res: Response, next: Function) => {
    try {
        const todos: ITodo[] = await Todo.find();
        const todos_maped = todos.map((todo) => { return { id: todo._id, name: todo.name}});
        res.status(200).json(todos_maped);
    } catch (err) {
        console.log("MongoDB - Unable to read Todos from MongoDB:", err);
        next(err);
    }
};


// U
export const updateTodo = async (req: Request, res: Response, next: Function) => {
    try {
        const options = { new: true };
        const { id } = req.params;
        const todo: ITodo | null = await Todo.findOneAndUpdate({ _id: id }, { 'name': req.body.name }, options);
        if ( todo ) return res.status(200).json({id: todo._id, name: todo.name});
        res.status(500).json({error: `Something went wrong !! Unable to update Todo with ID: ${id}`});
    } catch (err) {
        next(err);
    }
};


// D
export const deleteTodo = async (req: Request, res: Response, next: Function) => {
    const { id } = req.params;
    try {
        const todo: ITodo | null = await Todo.findOneAndDelete({ '_id': id });
        if( todo) return res.status(200).json({id: todo._id, name: todo.name});
        res.status(500).json({error: `Unable to delete Todo:${id}`});
    } catch (err) {
        console.log("MongoDB - Unable to delete Todo, _id:", id);
        next(err);
    }
};