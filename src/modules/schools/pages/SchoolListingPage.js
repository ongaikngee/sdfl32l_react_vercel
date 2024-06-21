// import React from "react"
// import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import { Grid, GridColumn, GridRow, Table, Pagination } from 'semantic-ui-react'

const SchoolListingPage = () => {
    const [schools, setSchools] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [maxPage, setMaxPage] = useState(0)

    useEffect(() => {
        getAPI()
    }, [page]);

    const getPageChange = (e, { activePage }) => {
        setPage(activePage)
    }

    const getAPI = async () => {

        const offset = (page - 1) * limit

        // API for MOE School
        const base_url = "https://data.gov.sg/api/action/datastore_search"
        const url = base_url + `?resource_id=d_688b934f82c1059ed0a6993d2a829089&limit=${limit}&offset=${offset}`

        const response = await fetch(url, {
            method: 'GET'
        })
        const data = await response.json()

        if (response.status === 200) {
            setSchools(data.result.records)
            setMaxPage(Math.floor(data.result.total / limit) + 1)
        } else {
            console.log('Something went wrong!')
        }
    }
    return (
        <Grid>
            <GridRow>
                <GridColumn>
                    <Table celled singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Address</Table.HeaderCell>
                                <Table.HeaderCell>Nature</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {schools.map((school, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{school.school_name}</Table.Cell>
                                    <Table.Cell>{school.address}</Table.Cell>
                                    <Table.Cell>{school.nature_code}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn>
                    <Pagination
                        defaultActivePage={page}
                        totalPages={maxPage}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={3}
                        onPageChange={getPageChange} />
                </GridColumn>
            </GridRow>
        </Grid>
    );
}

export default SchoolListingPage