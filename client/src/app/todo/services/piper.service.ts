import { Injectable }   from '@angular/core';
import { Observable }   from 'rxjs';
import { Todo }         from '../models/todo.model';
import { Store }        from '@ngrx/store';
import * as fromStore   from '../store'


@Injectable()
export class PiperService {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<fromStore.FmRootState>) { }

  start() {
    this.todos$ = this.store.select(fromStore.getTodos);
    this.store.dispatch(new fromStore.LoadTodos());
  }

  createNewTodo(str_todo) {
    this.store.dispatch(new fromStore.CreateNewTodo(str_todo));
  }


  deleteTodo(id: string) {
    this.store.dispatch(new fromStore.DeleteTodo(id));
  }

  saveTodo(todo: Todo) {
    this.store.dispatch(new fromStore.UpdateTodo(todo));
  }
  
}
