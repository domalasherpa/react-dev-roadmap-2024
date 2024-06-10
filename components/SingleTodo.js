function SingleTodo({todo, 
    addTodo, 
    removeTodo, 
    addCompleted, 
    removeCompleted,
    updateTodo
    }){

    const [checked, setChecked] = useState(todo.isCompleted);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo.todo);

    const handleChecked = () => {
        setChecked(!checked);

        if (todo.isCompleted) {
            todo.isCompleted = false;
            removeCompleted(todo.id);
            addTodo(todo);
        } else {
            todo.isCompleted = true;
            addCompleted(todo);
            removeTodo(todo.id);
        }
    };

    const editHandler = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setEditedTodo(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            saveEdit();
        }
    };

    const saveEdit = () => {
        setIsEditing(false);
        todo.todo = editedTodo != '' ? editedTodo : todo.todo ;
        updateTodo(todo.id, todo.todo);
        setEditedTodo(todo.todo);
    };

    const deleteHandler = () => {
        todo.isCompleted ? removeCompleted(todo.id) : removeTodo(todo.id);
    };

    return (
        <div className="todo">
            <span>
                <input type="checkbox" checked={checked} onChange={handleChecked} />
                {isEditing ? (
                    <input 
                        type="text" 
                        value={editedTodo} 
                        onChange={handleChange} 
                        onBlur={saveEdit} 
                        onKeyPress={handleKeyPress} 
                        autoFocus
                    />
                ) : (
                    <span>{todo.todo}</span>
                )}
            </span>
            <span>
                <i className="fas fa-edit" onClick={editHandler}></i>
                <i className="fas fa-trash-alt" onClick={deleteHandler}></i>
            </span>
        </div>
    );
}