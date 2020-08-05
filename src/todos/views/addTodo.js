import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions.js'

class AddTodo extends  React.Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);

        this.state = {
            value: ''
        }
    }

    onSubmit(ev) {
        ev.preventDefault();
        const inputValue = this.state.value;
        if(!inputValue.trim()) {
            return;
        }

        this.props.onAdd(inputValue);
        this.setState({
            value: ''
        })
    }

    onInputChanged(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.onInputChanged} value={this.state.value} />
                    <button className="add-todo" type='submit'>
                        添加
                    </button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);