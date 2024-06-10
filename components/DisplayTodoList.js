function DisplayTodoList({todoLists, addCompleted, removeCompleted, removeTodo, addTodo, updateTodo}){
    return todoLists && todoLists.map((todo) => (
        <SingleTodo
            todo={todo}
            key={todo.id}
            addCompleted={addCompleted}
            removeCompleted={removeCompleted}
            addTodo={addTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
        />
    ));
}