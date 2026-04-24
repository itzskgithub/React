import { useState, useCallback, useRef, useEffect } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) {
      str += "0123456789"
    }
    if(charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`"
    }
    
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setLength]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)

  }, [password]);

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 items-center">
      <h1 className='text-white text-center my-3'>Password_Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        placeholder="password"
        value={password}
        ref={passwordRef}
        readOnly
        className='w-full outline-none px-3 py-1'
        />
        <button 
        onClick={copyToClipboard}
        className='outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white'
        >Copy</button>
      </div>
      <div className='text-sm flex gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label> Length : {length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          className='cursor-pointer'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input 
          className='cursor-pointer'
          type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="charInput">Character</label>

        </div>
      </div>
    </div>
  )
}

export default App
