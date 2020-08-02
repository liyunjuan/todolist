export const TodoItem = ({ onToggle, onRemove, completed, text }) => (
    <li 
        className="todo-item"
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        <input className='toggle' type='checkbox' checked={completed ? 'checked' : ''} readOnly onClick={ontoggle} />
        <button className='remove' onClick={onRemove}>x</button>
    </li>
)