import React, { useState, useEffect } from 'react'
import { Grid, GridColumn, GridRow, Table, Pagination, Dimmer, Loader } from 'semantic-ui-react'
import { COLORS } from '../../common/constants/common'

const SchoolListingPage = () => {
    const [schools, setSchools] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [maxPage, setMaxPage] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAPI()
    }, [page]);

    const getPageChange = (e, { activePage }) => {
        setPage(activePage)
    }

    const getAPI = async () => {

        setLoading(true)

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
            setLoading(false)
        } else {
            console.log('Something went wrong!')
        }
    }
    return (
        <Grid>
            <GridRow>
                <GridColumn>
                    <Pagination
                        defaultActivePage={page}
                        totalPages={maxPage}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        onPageChange={getPageChange} />
                </GridColumn>
            </GridRow>
            {loading ? (
                <GridRow style={{ height: '200px' }}>
                    <GridColumn>
                        <Dimmer active inverted>
                            <Loader indeterminate size='large'>Getting School Listing</Loader>
                        </Dimmer>
                    </GridColumn>
                </GridRow>
            ) : (
                <GridRow>
                    <GridColumn>
                        <Table stackable celled striped singleLine color={COLORS.semantic_primary}>
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
            )}
        </Grid>
    );
}

export default SchoolListingPage