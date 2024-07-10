import { useState, useEffect } from 'react'
import { APP_SETTING, COLORS } from '../../common/constants/common'
import { useParams, useHistory } from 'react-router-dom';
import { GridRow, GridColumn, Dimmer, Loader, Label, Button } from 'semantic-ui-react';

export default function SchoolRegResultPage() {

    const { school } = useParams() // Get the id parameter from the URL
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const history = useHistory()
    useEffect(() => {
        getAPI()
    }, [])

    const getAPI = async () => {
        setError(null)
        setLoading(true)
        const base_url = APP_SETTING.base_url_for_backend
        const url = base_url + `p1_reg_results/search/?school=${school}`

        try {
            const response = await fetch(url, {
                method: 'GET'
            })
            if (!response.ok) {
                let errorMessage = await response.text();
                throw new Error(`Response status: ${response.status},  message: ${errorMessage}`)
            }
            const data = await response.json();
            setResult(data)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            {loading ? (
                <GridRow style={{ height: '200px' }}>
                    <GridColumn>
                        <Dimmer active inverted>
                            <Loader indeterminate size='large'>Getting School Listing</Loader>
                        </Dimmer>
                    </GridColumn>
                </GridRow>
            ) : (
                <div>
                    <h1>Results</h1>
                    {result && result.length > 0 ? (
                        result.map(item => (
                            <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                                <h2>{item.school} ({item.year})</h2>
                                <p>Total Vacancy: {item.total_vacancy}</p>
                                <p>Phase 2A:</p>
                                <ul>
                                    <li>Vacancies: {item.phase_2a_vacancies}</li>
                                    <li>Applicants: {item.phase_2a_applicants}</li>
                                    <li>Ballot: {item.phase_2a_ballot}</li>
                                </ul>
                                <p>Phase 2B:</p>
                                <ul>
                                    <li>Vacancies: {item.phase_2b_vacancies}</li>
                                    <li>Applicants: {item.phase_2b_applicants}</li>
                                    <li>Ballot: {item.phase_2b_ballot}</li>
                                </ul>
                                <p>Phase 2C:</p>
                                <ul>
                                    <li>Vacancies: {item.phase_2c_vacancies}</li>
                                    <li>Applicants: {item.phase_2c_applicants}</li>
                                    <li>Ballot: {item.phase_2c_ballot}</li>
                                </ul>
                                <p>Phase 2CS:</p>
                                <ul>
                                    <li>Vacancies: {item.phase_2cs_vacancies}</li>
                                    <li>Applicants: {item.phase_2cs_applicants}</li>
                                    <li>Ballot: {item.phase_2cs_ballot}</li>
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>No results found for {school}</p>
                    )}
                    <Button compact color={COLORS.semantic_primary} onClick={() => history.push(`/schools/${school}`)}>Click here</Button>
                </div>

            )}
            {error && (
                <Label basic color='red'>
                    {error}
                </Label>
            )}
        </div>
    )

}