function App() {
    const defaultTodo = JSON.parse(localStorage.getItem('todo')) || [];
    const defaultCompleted = JSON.parse(localStorage.getItem('completed')) || [];
    const [todoLists, setTodoLists] = useState(defaultTodo);
    const [completed, setCompleted] = useState(defaultCompleted);

    const addTodo = (newTodo) => {
        const updatedTodoLists = [...todoLists, newTodo];
        setTodoLists(updatedTodoLists);
        localStorage.setItem('todo', JSON.stringify(updatedTodoLists));
    };

    const removeTodo = (removeId) => {
        const filteredTodoLists = todoLists.filter(todo => todo.id !== removeId);
        setTodoLists(filteredTodoLists);
        localStorage.setItem('todo', JSON.stringify(filteredTodoLists));
    };

    const addCompleted = (todo) => {
        const updatedCompleted = [...completed, todo];
        setCompleted(updatedCompleted);
        localStorage.setItem('completed', JSON.stringify(updatedCompleted));
    };

    const removeCompleted = (removeId) => {
        const filteredCompletedLists = completed.filter(todo => todo.id !== removeId);
        setCompleted(filteredCompletedLists);
        localStorage.setItem('completed', JSON.stringify(filteredCompletedLists));
    };

    const updateTodo = (id, newTodo)=>{
        setTodoLists(defaultTodo.map((todo)=>{
            if(todo.id == id){
                todo.todo = newTodo;
            }   
            return todo;
        }));
        console.log(todoLists);
        localStorage.setItem('todo', JSON.stringify([...todoLists]));
    }

    const updateCompletedTodo = (id, newTodo)=>{
        setCompleted(completed.map((todo)=>{
            if(todo.id == id){
                todo.todo = newTodo;
            }   
            return todo;
        }));
        
        localStorage.setItem('completed', JSON.stringify([...completed]));
    }

    return (
        <div className="container displayFlex">
            <AddTodo addTodo={addTodo} />
            <div className="todoLists">
                <h3>Todo List</h3>
                <DisplayTodoList
                    todoLists={todoLists}
                    addCompleted={addCompleted}
                    removeCompleted={removeCompleted}
                    removeTodo={removeTodo}
                    addTodo={addTodo}
                    updateTodo={updateTodo}
                />
            </div>
            <div className="completed">
                <h3>Completed</h3>
                <DisplayTodoList 
                    todoLists={completed}
                    addCompleted={addCompleted}
                    removeCompleted={removeCompleted}
                    removeTodo={removeTodo}
                    addTodo={addTodo}
                    updateTodo={updateCompletedTodo}
                />
            </div>
        </div>
    );
}