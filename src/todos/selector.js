import { FilterTypes } from '../constants';
import { createSelector } from 'reselect';

const getFiles = (state) => state.filter;
const getTodos = (state) => state.todos;

export const selectVisibleTodos = createSelector(
  [getFiles, getTodos],
  (filter, todos) => {
    switch (filter) {
      case FilterTypes.ALL: 
        return todos;
      case FilterTypes.COMPLETED: 
        return todos.filter(item => item.completed);
      case FilterTypes.UNCOMPLETED:
        return todos.filter(item => !item.completed);
      default:
        throw new Error('unsupported filter');
    }
  }
);