import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("clicked", counter); 
    setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    setCounter(prevCounter => prevCounter - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Add value {counter}
      </button>
      <br />
      <button onClick={removeValue}>
        Remove value {counter}
      </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
