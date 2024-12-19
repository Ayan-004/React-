import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addvalue = () => {
    if(counter == 20) {
      setCounter(20)
    }else {
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if(counter == 0){
      setCounter(0)
    }else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addvalue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
