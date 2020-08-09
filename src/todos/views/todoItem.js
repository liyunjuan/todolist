import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';

class TodoItem extends React.Component{
    constructor() {
        super(...arguments)
        console.log('enter TodoItem constructor: ' + this.props.text);
    }

    render(){
        const { onToggleTodo, onRemoveTodo, completed, text } = this.props;
        console.log('enter TodoItem render: ' + text);
        return (
            <li 
                className="todo-item"
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                <input className='toggle' type='checkbox' checked={completed ? 'checked' : ''} readOnly onClick={onToggleTodo} />
                <label className='text'>{text}</label>
                <button className='remove' onClick={onRemoveTodo}>x</button>
            </li>
        )
    }
}

TodoItem.propTypes = {
    onToggleTodo: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleTodo: () => dispatch(toggleTodo(ownProps.id)),
        onRemoveTodo: () => dispatch(removeTodo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(TodoItem);