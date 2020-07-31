import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';
import { actions } from '.';

export default(state = [], actions) => {
    switch(actions.type) {
        case ADD_TODO: {
            return [
                {
                    id: actions.id,
                    text: actions.text,
                    completed: false
                },
                ...state
            ]
        }
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if(todoItem.id === actions.id) {
                    return {...todoItem, completed: !todoItem.completed}
                }else {
                    return todoItem;
                }
            })
        }
    }
}