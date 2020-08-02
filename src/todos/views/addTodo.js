import React from 'react'

export class AddTodo extends  React.Component {
    constructor(props) {
        super(props);
    }

    refInput(node) {
        this.input = node;
    }

    onSubmit(ev) {
        ev.preventDefault();
        const input = this.input;
        if(!input.value.trim()) {
            return;
        }

        this.props.onAdd(input.value);
        input.value = '';
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput} />
                    <button className="add-todo" type='submit'>
                        添加
                    </button>
                </form>
            </div>
        )
    }
}