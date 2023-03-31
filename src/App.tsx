import { useState } from 'react'
import reduxLogo from './assets/redux.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://redux.js.org/" target="_blank">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>
      </div>
      <h1>Redux Experiments</h1>
      <div className="card">
        <h2>Click Counter</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          Count: {count}
        </button>
      </div>
    </div>
  )
}

export default App
