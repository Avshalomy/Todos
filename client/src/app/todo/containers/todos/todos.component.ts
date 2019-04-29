import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';
import { Todo }           from '../../models/todo.model';
import { Store }             from '@ngrx/store';

import * as fromStore        from '../../store'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<fromStore.FmRootState>) { }

  ngOnInit() {
    this.todos$ = this.store.select(fromStore.getTodos);
    this.store.dispatch(new fromStore.LoadTodos());
  }

  onCreateNew(todo: HTMLInputElement) {
    this.createNew(todo);
  }

  onEnter(todo: HTMLInputElement) {
    this.createNew(todo);
  }

  private createNew(todo: HTMLInputElement) {
    todo.value.trim();
    if ( todo.value.length === 0 ) return;
    this.store.dispatch(new fromStore.CreateNewTodo(todo.value));
    todo.value = "";
  }

  onDeleteTodo(id: string) {
    this.store.dispatch(new fromStore.DeleteTodo(id));
  }

  onSaveTodo(todo: Todo) {
    this.store.dispatch(new fromStore.UpdateTodo(todo));
  }

}
