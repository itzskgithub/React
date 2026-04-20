import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const addCounter = () => {
    setCount(count + 1)
  }
  const subCounter = () => {
    setCount(count - 1)
  }


  return (
    <>
      <h1>Counter : {count}</h1>
      <div className="btn-container">
        <button onClick={addCounter}>Add counter</button>
        <button onClick={subCounter}>Sub counter</button>
      </div>
    </>
  )
}

export default App
