import { createStore } from 'redux'
import { createReducer, createActions } from "reduxsauce"
import { INITIAL_STATE } from '../Redux/reducer'

// Redux Sauce Types & Actions
export const { Types, Creators } = createActions({
    add: ['payload'],
    update: ['payload'],
    delete: ['payload']
})

// Handle Actions
const addHandler = (state = INITIAL_STATE, action) => {
    return [...state, action.payload]
}

const updateHandler = (state = INITIAL_STATE, action) => {
    const {payload} = action
    const todos = [...state]
    const index = state.findIndex(todo => todo.id === payload.id);
    todos[index] = payload
    return todos;
}

const deleteHandler = (state = INITIAL_STATE, action) => {
    const newState = [...state]
    return newState.filter(item => item.id !== action.payload.id)
}

const handlers = {
    [Types.ADD]: addHandler,
    [Types.UPDATE]: updateHandler,
    [Types.DELETE]: deleteHandler
}
  
const reducer = createReducer(INITIAL_STATE, handlers)
  
const store = createStore(reducer);

export default store;