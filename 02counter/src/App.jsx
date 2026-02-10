import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(10)
  const add=()=>{
    counter+=1
    console.log(counter);
    setCounter(counter)
    
  }
  

  return (
    <>
    <h1>karteeljk</h1>
    <button onClick={add}>add value {counter}</button>
    </>
  )
}

export default App
