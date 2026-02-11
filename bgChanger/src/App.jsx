import './index.css'
import {useState} from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-500"
      style={{backgroundColor:color}}
      >
        
    </div>
    </>
  )
}

export default App
