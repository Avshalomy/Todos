import { Todo }         from '../../models/todo.model';
import * as TodoActions from '../actions'

export interface TodoState {
    data: Todo[];
    loading: boolean;
    loaded: boolean;
}

export const initialState: TodoState = {
    data: [],
    loading: false,
    loaded: false
}


export function reducer(state = initialState, action: TodoActions.TodoActions): TodoState {

    switch(action.type) {
        
        case TodoActions.LOAD_TODOS: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case TodoActions.LOAD_TODOS_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            }
        }
        case TodoActions.LOAD_TODOS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
        case TodoActions.CREATE_NEW_TODO: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case TodoActions.CREATE_NEW_TODO_SUCCESS: {
            return {
                loading: false,
                loaded: true,
                data: [...state.data, action.payload]
            }
        }
        case TodoActions.DELETE_TODO: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case TodoActions.DELETE_TODO_SUCCESS: {
            const data = state.data.filter(todo => todo.id !== action.payload.id)
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            }
        }



        case TodoActions.UPDATE_TODO: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case TodoActions.UPDATE_TODO_SUCCESS: {
            const index_start = state.data.findIndex(todo => todo.id === action.payload.id);
            const data = [...state.data];                   // immutable
            data.splice(index_start, 1, action.payload );   // insert new todo to the same index it was
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            }
        }



    }

    return state;
}


export const getTodos        = (state: TodoState) => state.data;
export const getTodosLoading = (state: TodoState) => state.loading;
export const getTodosLoaded  = (state: TodoState) => state.loaded;