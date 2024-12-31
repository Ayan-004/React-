import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ayan-004')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    return (
        <div className='bg-gray-700 text-white p-4 text-3xl'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Githib Picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch("https://api.github.com/users/Ayan-004")
    return response.json()
}
