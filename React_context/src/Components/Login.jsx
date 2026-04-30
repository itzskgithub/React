import React from 'react'
import UserContext from '../Context/UserContext'
import {useState, useContext} from 'react'

function Login() {
    const[username, setUsername] = useState()
    const[password, setPassword] = useState()

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div className='bg-gray-300'>
        <h2 className='text-4xl'>React_context_concepts</h2>
        <h3>Login</h3>
        <input 
        type="text"
        placeholder='UserName'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        {" "}
        <input 
        type="all"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login