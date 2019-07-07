import { Component, OnInit } from '@angular/core';
import { PiperService }      from '../../services/piper.service';


@Component({
  selector:    'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.scss'],
  providers: [ PiperService]
})
export class TodosComponent implements OnInit {

  constructor(public piperService: PiperService) {}

  ngOnInit() {
    this.piperService.start();
  }

  onCreateNew(todo: string) {
    this.createNew(todo);
  }

  onEnter(todo: string) {
    this.createNew(todo);
  }

  private createNew(todo: string) {
    todo.trim();
    if ( todo.length === 0 ) return;
    this.piperService.createNewTodo(todo)
    todo = "";
  }

}
