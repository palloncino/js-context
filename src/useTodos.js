import { useEffect, useState } from "react"

export const useTodos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetchTodos();
  }, [])

  function setTodoTitle(id, newTitle) {
    // [{id, title}, ...] 
    const newTodos = todos.map(todo => todo.id === id ? todo.title = newTitle : null);
    setTodos(newTodos);
  }

  async function fetchTodos() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await res.json();
    setTodos(data);
  }

  return {
    todos,
    setTodoTitle
  }
}