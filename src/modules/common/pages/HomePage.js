import React, { useState, useEffect, useContext } from "react"
import { Grid } from 'semantic-ui-react';
import AuthContext from "../../auth/context/AuthContext"
import HomeStatsContainerComponents from "../components/HomeStatsContainerComponents";
import HomeChartsContainerComponents from "../components/HomeChartsContainerComponents";

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
        <Grid>
            <HomeStatsContainerComponents />
            <HomeChartsContainerComponents />
        </Grid>
    )
}

export default HomePage