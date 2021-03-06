import types from '../types'

export const INITIAL_STATE = [{id: 1, text: 'Item 1'}]

export default (state = INITIAL_STATE, action) => {
  const {type, payload} = action

  const todos = [...state]

  switch (type) {
    case types.add:
      console.log('add normal')

      todos.push(payload)
      return todos

    case types.delete:
      return todos.filter(todo => todo.id != payload.id)

    case types.update:
      const index = state.findIndex(todo => todo.id === payload.id)
      todos[index] = payload
      return todos

    default:
      return state
  }
}
