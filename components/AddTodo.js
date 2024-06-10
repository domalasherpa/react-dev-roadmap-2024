function AddTodo({addTodo}){
    const [todo, setTodo] = useState('');

    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    const handleClick = () => {
        todo != '' && addTodo(new TodoObject(todo));
        setTodo('');
    };

    return (
        <div className="addTodos">
            <input type="text" id="todo" 
            value={todo} 
            onChange={handleChange} 
            className="todoInput"
            placeholder="add todos"
            />
            <button onClick={handleClick}> Add</button>
        </div>
    )
}