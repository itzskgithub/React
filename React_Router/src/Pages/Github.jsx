import React from 'react'
import {useLoaderData} from 'react-router-dom'
import my_img from './myimg.jpg'

export const githubInfoLoader = async() => {
        const response = await fetch('https://api.github.com/users/itzskgithub');
        return response.json()
    }

function Github() {

    const data = useLoaderData()

    

    return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img src = {my_img} alt ='my_pic' width={300}/>
    </div>

  )
}

export default Github