import { useEffect } from 'react';
import { ctx } from './context';
import { useInitialData } from './useInitialData';

function App() {

  const data = useInitialData();

  useEffect(() => console.log(data), [data]);

  return (
    <div className="App">
      <ctx.Provider value={data}>
        <div></div>
      </ctx.Provider>
    </div>
  );
}

export default App;
