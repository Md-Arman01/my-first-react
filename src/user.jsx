import { useEffect, useState } from "react"

export default function User(){
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h1>user: {users.length}</h1>

        </div>

    )
}