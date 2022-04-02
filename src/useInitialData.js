import { useEffect, useState } from "react"

export const useInitialData = () => {
  const [state, setState] = useState();

  useEffect(() => {
    const data = fetchInitialData();
    setState(data);
  }, [])

  async function fetchInitialData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    return await res.json();
  }

  return {
    todos: state
  }
}