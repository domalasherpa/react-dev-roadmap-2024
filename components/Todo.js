function TodoObject(todo, completed){
    this.id = self.crypto.randomUUID(),
    this.todo = todo,
    this.isCompleted = completed
}