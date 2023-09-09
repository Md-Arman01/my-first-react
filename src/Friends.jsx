import { useEffect, useState } from "react"
import Friend from "./Friend"
import './Friends.css'

export default function Friends (){
    
    const [friends, setFriends] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => setFriends(res))


    }, [])



    return (
        <div className="style">
            <h1>Friends: {friends.length}</h1>
            {
                friends.map(friend => <Friend frd={friend}></Friend>)
            }
        </div>

    )
}