import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import WebApp from '@twa-dev/sdk';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
          🍟
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <h1>Unicode Character</h1>
        <h3>(U+1F436)</h3>
        <h3>Dog Face</h3>
        <h3>&#128054;</h3>
        <h3>😆</h3>
      </div>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} is something cool
        </button>
      </div>
      {/* Here we add our button with alert callback */}
      <div className='card'>
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>
      </div>
    </>
  );
}

export default App;
