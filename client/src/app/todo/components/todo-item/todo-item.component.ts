import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<string> = new EventEmitter();
  @Output() saveTodo:   EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  edit_mode: boolean = false;
  todo_new_name: string = "";


  switch2EditMode(e: HTMLInputElement) {
    this.edit_mode = true;
    e.value = this.todo.name;
    setTimeout(()=>e.focus(),0);
  }

  onKeyUp(e: any ) {
    this.todo_new_name = e.target.value;
  }

  onBlur(e: HTMLInputElement) {
    if (this.todo_new_name !== this.todo.name)  
      setTimeout(()=>e.value = this.todo.name,200);
    this.edit_mode = false;
  }

  remove(id: string) {
    this.deleteTodo.emit(id);
  }

  save() {
    if (this.todo_new_name === '') return;
    this.saveTodo.emit({id: this.todo.id, name: this.todo_new_name});
    this.todo_new_name = '';
  }

}