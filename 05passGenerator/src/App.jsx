import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numAllowed) srt += "0123456789"
  if(charAllowed) srt += "!@#$%^&*?/;:"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass = srt.charAt(char)
  }
  setPassword(pass)

}, [length, numAllowed, charAllowed, setPassword])

passwordGenerator()

  return (
    <> 
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='Password'
        readOnly
        />
        <button 
        className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='text-orange-600'>Lenght:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {numAllowed}
          id="numberInput"
          onChange={() => {
            setNumAllowed = ((prev => !prev))
          }}
          />
          <label htmlFor='numberInput' className='text-orange-600'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {charAllowed}
          id="charInput"
          onChange={() => {
            setCharAllowed = ((prev => !prev))
          }}
          />
          <label htmlFor='charInput' className='text-orange-600'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
