import { Action }  from '@ngrx/store';
import { Todo }    from '../../models/todo.model';

export const LOAD_TODOS               = '[TODO] Load Todos';
export const LOAD_TODOS_SUCCESS       = '[TODO] Load Todos Success';
export const LOAD_TODOS_FAIL          = '[TODO] Load Todos Fail';

export const CREATE_NEW_TODO          = '[TODO] Create New Todo';
export const CREATE_NEW_TODO_SUCCESS  = '[TODO] Create New Todo Success';
export const CREATE_NEW_TODO_FAIL     = '[TODO] Create New Todo Fail';

export const DELETE_TODO              = '[TODO] Delete Todo';
export const DELETE_TODO_SUCCESS      = '[TODO] Delete Todo Success';
export const DELETE_TODO_FAIL         = '[TODO] Delete Todo Fail';

export const UPDATE_TODO              = '[TODO] Update Todo';
export const UPDATE_TODO_SUCCESS      = '[TODO] Update Todo Success';
export const UPDATE_TODO_FAIL         = '[TODO] Update Todo Fail';



export class LoadTodos implements Action {
    readonly type = LOAD_TODOS;
}


export class LoadTodosSuccess implements Action {
    readonly type = LOAD_TODOS_SUCCESS;
    constructor(public payload: Todo[]) {}
}


export class LoadTodosFail implements Action {
    readonly type = LOAD_TODOS_FAIL;
    constructor(public payload: any) {
        console.log("Failed to load Todos:", payload);
    }
}


export class CreateNewTodo implements Action {
    readonly type = CREATE_NEW_TODO;
    constructor(public payload: string) {}
}

export class CreateNewTodoSuccess implements Action {
    readonly type = CREATE_NEW_TODO_SUCCESS;
    constructor(public payload: Todo) {
        console.log("Create New Todo ... DONE!", payload)
    }
}


export class CreateNewTodoFail implements Action {
    readonly type = CREATE_NEW_TODO_FAIL;
    constructor(public payload: any) {
        console.log("Failed to Create New Todo:", payload);
    }
}


export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;
    constructor(public payload: string) {}
}


export class DeleteTodoSuccess implements Action {
    readonly type = DELETE_TODO_SUCCESS;
    constructor(public payload: Todo) {
        console.log("Delete Todo ... DONE!", payload)
    }
}


export class DeleteTodoFail implements Action {
    readonly type = DELETE_TODO_FAIL;
    constructor(public payload: any) {
        console.log("Failed to Delete Todo:", payload);
    }
}


export class UpdateTodo implements Action {
    readonly type = UPDATE_TODO;
    constructor(public payload: Todo) {}
}


export class UpdateTodoSuccess implements Action {
    readonly type = UPDATE_TODO_SUCCESS;
    constructor(public payload: Todo) {
        console.log("Update Todo ... DONE!", payload)
    }
}


export class UpdateTodoFail implements Action {
    readonly type = UPDATE_TODO_FAIL;
    constructor(public payload: any) {
        console.log("Failed to Update Todo:", payload);
    }
}



export type TodoActions = 
    LoadTodos           | 
    LoadTodosSuccess    | 
    LoadTodosFail       |
    CreateNewTodo        |
    CreateNewTodoSuccess |
    CreateNewTodoFail    |
    DeleteTodo           |
    DeleteTodoSuccess    |
    DeleteTodoFail       |
    UpdateTodo           |
    UpdateTodoSuccess    |
    UpdateTodoFail;