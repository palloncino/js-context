import { ctx } from './context';
import { useTodos } from './useTodos';
import { Header } from './components/Header';
import { Todos } from './components/Todos';

function App() {

  const { todos } = useTodos();

  return (
    <div className="App">
      <ctx.Provider value={todos}>
        <Header />
        <Todos />
      </ctx.Provider>
    </div>
  );
}

export default App;
