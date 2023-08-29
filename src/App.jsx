/* eslint-disable no-unused-vars */

import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import toDos from "./mock/mock";

import './App.css'

const App = () => {

  const [todos, setTodos] = useState(toDos);

  //add nuevo todo en la lista
  const addTodo = (text, category) => {

    //add el array de toDos por spreed, ya existente al nuevo array, donde estaran los antiguos y los nuevos toDos. En el nuevo todo recibe id aleatorio, 

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }]
    console.table(newTodos);
    //actualizar el estado del toDos con los newTodos, a traves del usestate
    setTodos(newTodos)

  }

  //el id ayuda a saber cual item será removido de la lista
  const removeTodo = (id) => {
    const newTodos = [...todos]
    // funcion filter no modifica el array original, encuentro los items que que no tienen el id igual al parametro, permanecen en la lista, los iguales, serán removidos

    const filteredTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null
    )
    setTodos(filteredTodos)

  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    //map modifica el array original
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)

  }

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
