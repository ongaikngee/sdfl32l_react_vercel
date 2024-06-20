import React, { useState, useEffect, useContext } from "react"
import { Container, Header, Segment } from 'semantic-ui-react';
import AuthContext from "../../auth/context/AuthContext"
import { COLORS } from "../../common/constants/common"

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
        <Segment
            textAlign='center'
            style={{
                minHeight: 500,
                padding: '1em 0em',
                backgroundColor: 'white',
                color: COLORS.semantic_primary, // Hint of orange
            }}
            vertical
        >
            <Container text>
                <Header
                    as='h1'
                    content='Welcome to the Dashboard'
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '3em',
                        color: COLORS.semantic_primary, // Hint of orange
                    }}
                />
                <Header
                    as='h2'
                    content='Manage your data effectively and efficiently.'
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginTop: '1.5em',
                        color: COLORS.semantic_primary, // Hint of orange
                    }}
                />
            </Container>
        </Segment>
    )
    // return (
    //     <div>
    //         <p>Welcome to the HomePage!</p>
    //         {/* <ul>
    //             {notes.map(note => (
    //                 <li key={note.id}>{note.body}</li>
    //             ))}
    //         </ul> */}
    //     </div>
    // )
}

export default HomePage