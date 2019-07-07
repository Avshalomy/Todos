import { Component, Input } from '@angular/core';
import { PiperService }     from '../../services/piper.service';
import { Todo }             from '../../models/todo.model';


@Component({
  selector:    'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: [ './todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() todo: Todo;

  constructor(public piperService: PiperService) { }

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
    this.piperService.deleteTodo(id);
  }

  save() {
    if (this.todo_new_name === '') return;
    this.piperService.saveTodo({id: this.todo.id, name: this.todo_new_name});
    this.todo_new_name = '';
  }

}