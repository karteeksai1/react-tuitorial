import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [password,setPassword]=useState("")
  const [number,setnumber]=useState(false)
  const [char,setChar]=useState(false)
  const [length,setLength]=useState(8);


  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str+="0123456789"
    }
    if(char){
      str+="!@#$%^&*()_+"
    }
    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length)
      pass+=str[char]
    }

    setPassword(pass)
    
  },[length,number,char])
  useEffect(() => {
  passwordGenerator();
}, [length, number, char,passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      
      {/* Password and Copy Button Row */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 transition-colors'
        >copy</button>
      </div>

      {/* Controls Row */}
      <div className='flex text-sm gap-x-2'>
        
        {/* Range Slider */}
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>

        {/* Number Checkbox */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
                setnumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Character Checkbox */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="characterInput"
            onChange={() => {
                setChar((prev) => !prev )
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App
