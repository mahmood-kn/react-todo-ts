import React, { ReactElement, useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

function App(): ReactElement {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: (Math.random() * 1000).toString(), text },
    ]);
  };
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} deleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
