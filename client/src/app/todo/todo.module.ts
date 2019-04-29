import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }     from '@angular/common/http';
import { StoreModule }          from '@ngrx/store';
import { EffectsModule }        from '@ngrx/effects';



// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices   from './services';

// store NGRX
import { effects, reducers } from './store';


import { TodosComponent } from './containers/todos/todos.component';


// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: TodosComponent,
  }
];



@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
  ],
  providers: [
    ...fromServices.services
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [...fromContainers.containers]
})
export class TodoModule { }
