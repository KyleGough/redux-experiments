import reduxLogo from './assets/redux.svg'
import './App.css'
import { Counter } from './features/counter/Counter'

const App: React.FC = () => (
  <div className="App">
    <div>
      <a href="https://redux.js.org/" target="_blank">
        <img src={reduxLogo} className="logo" alt="Redux logo" />
      </a>
    </div>
    <h1>Redux Experiments</h1>
    <Counter />
  </div>
)

export default App