import { Request, Response } from "express";

export const notFoundError = (req: Request, res: Response, next: Function) => {
    const err: any = new Error('Not found');
    err.status = 404;
    next(err);
};

export const errorHandler = (err: any, req: Request, res: Response, next: Function) => {
    return res.status(err.status || 500).json({
        message: err.message,
        status: err.status,
        stack: err.stack
    });
};