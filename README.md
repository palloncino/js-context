# 🤔 How to use React Context

1) Bootstrap project

```
yarn create react-app js-context
```

2) Create the context with createContext API

```javascript
import { createContext } from "react";

export default createContext();
```

3) Use the Provider and attribute the value from a custom hook

```javascript
import ctx from "./context";
import { useTodos } from "./useTodos";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";

function App() {
  const { todos, setTodoTitle } = useTodos();

  return (
    <div className="App">
      <ctx.Provider value={{ todos, setTodoTitle }}>
        <Header />
        <Todos />
      </ctx.Provider>
    </div>
  );
}

export default App;
```

4) Example of a custom hook

```javascript
import { useEffect, useState } from "react"

export const useTodos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetchTodos();
  }, [])

  function setTodoTitle(id, newTitle) {
    // [{id, title}, ...] 
    const newTodos = todos.map(todo => todo.id === id ? {...todo, title: newTitle } : todo);
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
```

5) useContext API in all its greatness

```javascript
import { useContext } from "react";
import ctx from "../context";

export const Todos = () => {
  const { todos, setTodoTitle } = useContext(ctx);
  
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
```

You are now good to go! Bye 👋