import React, { useState, useEffect } from "react"
import { Grid, GridColumn, GridRow, Table } from 'semantic-ui-react'

const SemanticSchoolDataPage = () => {

    const [school, setSchool] = useState({})
    useEffect(() => {
        getAPI()
    }, [])

    const getAPI = async () => {
        const offset = 277

        // API for MOE School
        const base_url = "https://data.gov.sg/api/action/datastore_search"
        const url = base_url + `?resource_id=d_688b934f82c1059ed0a6993d2a829089&limit=1&offset=${offset}`

        const response = await fetch(url, {
            method: 'GET'
        })
        const data = await response.json()

        if (response.status === 200) {
            setSchool(data.result.records[0])
        } else {
            console.log('Something went wrong!')
        }
    }
    return (
        <Grid>
            <GridRow>
                <GridColumn>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    Key
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Value
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {Object.keys(school).map((key) => (
                                <Table.Row key={key}>
                                    <Table.Cell>
                                        {key}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {school[key]}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </GridColumn>
            </GridRow>
        </Grid >
    )
}

export default SemanticSchoolDataPage