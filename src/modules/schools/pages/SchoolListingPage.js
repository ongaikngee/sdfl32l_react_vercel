import React, { useState, useEffect } from 'react'
import { COLORS } from '../../common/constants/common'
import {
    Grid, GridColumn, GridRow,
    Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell,
    Pagination, Dimmer, Loader, Label, Button, Input
} from 'semantic-ui-react'
import { useHistory, useParams } from 'react-router-dom';

const SchoolListingPage = () => {
    const { school } = useParams() // Get the id parameter from the URL
    const [schools, setSchools] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [activePage, setActivePage] = useState(1); // current active page
    const [query, setQuery] = useState('')
    const itemsPerPage = 10 // number of items per page
    const limit = 400 // limit queries records
    const startIndex = (activePage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    let displayedSchools = schools.slice(startIndex, endIndex)

    useEffect(() => {
        getAPI()
    }, []);

    const handlePaginationChange = (e, { activePage }) => setActivePage(activePage);


    const getAPI = async () => {
        setError(null)
        setLoading(true)

        // API for MOE School
        const base_url = "https://data.gov.sg/api/action/datastore_search"
        const url = base_url + `?resource_id=d_688b934f82c1059ed0a6993d2a829089&limit=${limit}`

        try {
            const response = await fetch(url, {
                method: 'GET'
            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const data = await response.json()
            let filteredSchools = data.result.records.filter(school => school.mainlevel_code === 'PRIMARY');

            if (school){
                setQuery(school)
            }

            setSchools(filteredSchools)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    const history = useHistory()

    const navigateToPage = (school) => {
        history.push(`/schools/schoolResult/${school}`)
    }

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }

    const filteredSchools = schools.filter(school =>
        school.school_name.toLowerCase().includes(query.toLowerCase())
    )
    displayedSchools = filteredSchools.slice(startIndex, endIndex)

    return (
        <Grid>
            {query ? (
                <></>
            ) : (
                <GridRow>
                    <GridColumn>
                        <Pagination
                            activePage={activePage}
                            onPageChange={handlePaginationChange}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={Math.ceil(schools.length / itemsPerPage)}
                        />
                    </GridColumn>
                </GridRow>
            )}
            {loading ? (
                <GridRow style={{ height: '200px' }}>
                    <GridColumn>
                        <Dimmer active inverted>
                            <Loader indeterminate size='large'>Getting School Listing</Loader>
                        </Dimmer>
                    </GridColumn>
                </GridRow>
            ) : (
                <>
                    <GridRow>
                        <GridColumn>
                            <Input placeholder='Search...'
                                value={query}
                                onChange={handleSearch} />
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn>
                            <Table stackable celled striped singleLine color={COLORS.semantic_primary}>
                                <TableHeader>
                                    <TableRow>
                                        <Table.HeaderCell>Result</Table.HeaderCell>
                                        <TableHeaderCell>Name</TableHeaderCell>
                                        <TableHeaderCell>Address</TableHeaderCell>
                                        <TableHeaderCell>Nature</TableHeaderCell>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {displayedSchools.map((school, index) => (
                                        <TableRow key={index}>
                                            <Table.Cell><Button onClick={() => navigateToPage(school.school_name)}>Result</Button></Table.Cell>
                                            <TableCell>{school.school_name}</TableCell>
                                            <TableCell>{school.address}</TableCell>
                                            <TableCell>{school.nature_code}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </GridColumn>
                    </GridRow>
                </>
            )}
            {error && (
                <GridRow>
                    <GridColumn>
                        <Label basic color='red'>
                            {error}
                        </Label>
                    </GridColumn>
                </GridRow>
            )}
        </Grid>
    );
}

export default SchoolListingPage