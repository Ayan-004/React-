import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card heading = "Science of Physics" description = "This is the card of Science of Physics"/>
    <Card heading = "Science of Chemistry" description = "This is the card of Science of Chemistry"/>
    </>
  )
}

export default App
