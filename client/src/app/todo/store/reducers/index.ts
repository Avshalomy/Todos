import * as fromReducers from './todos.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface FmRootState {
    todos: fromReducers.TodoState
}


export const reducers: ActionReducerMap<FmRootState> = {
    todos: fromReducers.reducer
}


export const getFmRootState        = createFeatureSelector<FmRootState>('products');
export const getTodosState   = createSelector(getFmRootState, (state: FmRootState) => state.todos);
export const getTodos        = createSelector(getTodosState, fromReducers.getTodos);
export const getTodossLoading = createSelector(getTodosState, fromReducers.getTodosLoading);
export const getTodosLoaded  = createSelector(getTodosState, fromReducers.getTodosLoaded);