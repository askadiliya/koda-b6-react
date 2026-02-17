import React, { useEffect, useState } from 'react'
import { Await } from 'react-router-dom'

function Users() {
    const [user, setUser] = useState([])

   useEffect(()=>{
    async function getData() {
        try {
            const res = await fetch ("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setUser(data)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    getData()
   },[])
  return (
    <div>
        {user.map((item)=>(
            // <div>{item.name}</div>cd ..
            
            <div>{item.address.city}</div>
        ))}
    </div>
  )
}

export default Users