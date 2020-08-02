import TodoItem from './todoItem'

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => (
                    <TodoItem 
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggel={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />
                ))
            }
        </ul>
    )
}