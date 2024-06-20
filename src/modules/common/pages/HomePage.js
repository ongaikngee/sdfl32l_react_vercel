import React, { useState, useEffect, useContext } from "react"
import AuthContext from "../../auth/context/AuthContext"

const HomePage = () => {
    let [notes, setNotes] = useState([])
    let { authTokens, logoutUser } = useContext(AuthContext)

    useEffect(() => {
        // getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('http://localhost:8000/api/notes/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if (response.status === 200) {
            setNotes(data)
        } else if (response.statusText === 'Unauthorized') {
            logoutUser()
        }
    }
    return (
        <div>
            <p>Welcome to the HomePage!</p>
            {/* <ul>
                {notes.map(note => (
                    <li key={note.id}>{note.body}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default HomePage