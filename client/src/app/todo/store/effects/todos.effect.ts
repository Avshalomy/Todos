import { Injectable }                   from '@angular/core';
import { TodosService }                 from '../../services/todos.service'
import { Actions, Effect, ofType }      from '@ngrx/effects';
import { switchMap, map, catchError, tap }   from 'rxjs/operators';
import { of }                           from 'rxjs';
import { LOAD_TODOS,
         CREATE_NEW_TODO, 
         DELETE_TODO,
         UPDATE_TODO,
         LoadTodosSuccess,
         LoadTodosFail, 
         CreateNewTodo,
         CreateNewTodoSuccess,
         CreateNewTodoFail, 
         DeleteTodo,
         DeleteTodoSuccess,
         DeleteTodoFail,
         UpdateTodo,
         UpdateTodoSuccess,
         UpdateTodoFail}                from '../actions/todos.action';

    
@Injectable()
export class TodoEffects {
    constructor(private todosService: TodosService, private actions$: Actions) {}

    @Effect()
    loadTodos$ = this.actions$.pipe(
        ofType(LOAD_TODOS),
        switchMap(() => {
            return this.todosService.getTodos().pipe(
                map(todos => new LoadTodosSuccess(todos)),
                catchError(error => of(new LoadTodosFail(error)))
            )
        })
    )

    
    @Effect()
    createTodo$ = this.actions$.pipe(
        ofType(CREATE_NEW_TODO),
        map((action: CreateNewTodo) => action.payload),
        switchMap((name) => {
            return this.todosService.createTodo({name}).pipe(
                map(todo => new CreateNewTodoSuccess(todo)),
                catchError(error => of(new CreateNewTodoFail(error)))
            )
        })
    )


    @Effect()
    deleteTodo$ = this.actions$.pipe(
        ofType(DELETE_TODO),
        map((action: DeleteTodo) => action.payload),
        switchMap((id) => {
            return this.todosService.removeTodo(id).pipe(
                map(todo => new DeleteTodoSuccess(todo)),
                catchError(error => of(new DeleteTodoFail(error)))
            )
        })
    )


    @Effect()
    updateTodo$ = this.actions$.pipe(
        ofType(UPDATE_TODO),
        map((action: UpdateTodo) => action.payload),
        switchMap((todo) => {
            return this.todosService.updateTodo(todo).pipe(
                map(todo => new UpdateTodoSuccess(todo)),
                catchError(error => of(new UpdateTodoFail(error)))
            )
        })
    )

}