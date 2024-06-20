import React, { useState, useEffect, useContext } from "react"
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import AuthContext from "../../auth/context/AuthContext"
import HomeStatsComponent from "../components/HomeStatsComponent";

const HomePage = () => {
    let [notes, setNotes] = useState([])
    let { authTokens, logoutUser } = useContext(AuthContext)
    const column_mobile = 8
    const column_table = 8
    const column_computer = 4
    const statsForTopRow = [
        { title: 'Rank', value: '20th', color: 'red' },
        { title: 'Kank', value: '16%', color: 'orange' },
        { title: 'Score', value: '39/50', color: 'yellow' },
        { title: 'Position', value: '10th', color: 'teal' }
    ]


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
        <>
            <Grid>
                <GridRow columns={4}>
                    {statsForTopRow.map((item, index) => (
                        <GridColumn key={index} mobile={column_mobile} tablet={column_table} computer={column_computer}>
                            <HomeStatsComponent item={item} />
                        </GridColumn>
                    ))}
                </GridRow>
            </Grid>
        </>
    )
}

export default HomePage