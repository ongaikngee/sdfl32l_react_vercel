import React, { useState, useEffect } from "react"
import {
    Grid, GridColumn, GridRow,
    Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell,
    Pagination, Dimmer, Loader
} from 'semantic-ui-react'
import { APP_SETTING } from '../../common/constants/common'

const SchoolRegPhasesInfoPage = () => {
    const [phases, setPhases] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAPI()
    }, []);

    const getAPI = async () => {
        setLoading(true)
        const base_url = APP_SETTING.base_url_for_backend
        const url = base_url + `p1_reg_phases/`

        const response = await fetch(url, {
            method: 'GET'
        })
        const data = await response.json()

        if (response.status === 200) {
            setPhases(data)
            setLoading(false)
        } else {
            console.log('Something went wrong!')
        }

    }

    return (
        <>
            <h1>Registration phases</h1>
            {loading ? (
                <GridRow style={{ height: '200px' }}>
                    <GridColumn>
                        <Dimmer active inverted>
                            <Loader indeterminate size='large'>Getting School Listing</Loader>
                        </Dimmer>
                    </GridColumn>
                </GridRow>
            ) : (
                <Table>
                    {phases.map((phase, index) => (
                        <TableRow key={index}>
                            <TableCell>{phase.phase_name}</TableCell>
                            <TableCell>{phase.start_date}</TableCell>
                            <TableCell>{phase.end_date}</TableCell>
                            <TableCell>{phase.description}</TableCell>
                        </TableRow>
                    ))}
                </Table>

            )
            }
        </>

    )
}

export default SchoolRegPhasesInfoPage