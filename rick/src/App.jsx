/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
import { useState } from 'react';
import { Link } from "react-router-dom";
import EpisodeList from './components/EpisodeList';
import Counter from '../../react-tailwind/src/components/Counter';
export default function App(){
//App component (functional component/ParentComponent)

  const [count, setCount] = useState(0)
  
  const handleIncrement = ()=>{
    setCount(count + 1)
  }

  const handleDecrement = ()=>{
    setCount(count - 1)
  }

  return (

    <div>
      {/**Pass the count state variable, handleIncrement and handleDecrement functions as props to the Counter component */}
      <Counter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <Link to='/rickandmorty'>Check out Rick and Morty</Link>
      <h2>episodes</h2>
      <EpisodeList/>
    </div>
  )
  }