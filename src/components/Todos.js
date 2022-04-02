import { useContext, useEffect } from "react"
import { ctx } from "../context"

export const Todos = () => {
  const todos = useContext(ctx)
  useEffect(() => console.log(1.3, {todos}), [todos])
  return (
    <div>
      <h2>Todos:</h2>
      {todos && todos.map(todo => (
        <div key={todo.id}>{todo.id}) {todo.title}</div>
      ))}
    </div>
  )
}