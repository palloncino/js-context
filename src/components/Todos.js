import { useContext, useEffect } from "react";
import { ctx } from "../context";

export const Todos = () => {
  const { todos, setTodoTitle } = useContext(ctx);
  useEffect(() => console.log(1.3, { todos }), [todos]);
  
  return (
    <div>
      <div>
        <button onClick={() => setTodoTitle(1, "Palla di Pollo")}>click</button>
      </div>
      <div>
        <h2>Todos:</h2>
        {todos &&
          todos.map((todo) => (
            <div key={todo.id}>
              {todo.id}) {todo.title}
            </div>
          ))}
      </div>
    </div>
  );
};
