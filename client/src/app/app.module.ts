import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule }            from '@ngrx/effects';

// not in use for production
import { StoreDevtoolsModule }      from '@ngrx/store-devtools';
import { storeFreeze }              from 'ngrx-store-freeze';

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

import { AppComponent } from './app.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todo' },
  { path: 'todo',loadChildren: './todo/todo.module#TodoModule'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
