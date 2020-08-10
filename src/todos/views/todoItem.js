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

/**
 * 为什么改造这个文件可以优化：
 * 1、最开始是一个无状态的组件，即使当前组件没有变化，也会重新计算一遍，浪费了这计算的时间
 * 2、所以改成class组件，通过redux取数据，redux会帮助我们缓存结果，达到减少计算的过程。
 * 3、所以可以优化
 */