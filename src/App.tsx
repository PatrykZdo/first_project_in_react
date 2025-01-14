import React from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo'
import { useState } from 'react';
import './App.css';



function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(todoText: string){
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) =>{

      return prevTodos.concat(newTodo);
    }
    )
  }

  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
