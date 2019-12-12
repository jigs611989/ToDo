import types from '../types'

export const addItem = payload => ({
  type: types.add,
  payload,
});

export const updateItem = payload => ({
  type: types.update,
  payload,
});

export const deleteItem = payload => ({
  type: types.delete,
  payload,
});
