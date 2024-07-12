import { useState, useEffect } from 'react'
import { APP_SETTING, COLORS } from '../../common/constants/common'
import { useParams, useHistory } from 'react-router-dom'
import { GridRow, GridColumn, Dimmer, Loader, Label, Button } from 'semantic-ui-react'
import SchoolRegResultChartPage from '../components/SchoolRegResultChartPage'

export default function SchoolRegResultPage() {

    const { school } = useParams() // Get the id parameter from the URL
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const history = useHistory()
    useEffect(() => {
        getAPI()
    }, [])

    const chartData = (data) => {
        const chartData = []
        chartData.push(data.total_vacancy - data.phase_2a_vacancies - 60)
        if (data.phase_2a_applicants != -1) {
            chartData.push(data.phase_2a_vacancies >= data.phase_2a_applicants ? data.phase_2a_applicants : data.phase_2a_vacancies)
        } else {
            chartData.push(0)
        }


        if (data.phase_2b_applicants != -1) {
            chartData.push(data.phase_2b_vacancies >= data.phase_2b_applicants ? data.phase_2b_applicants : data.phase_2b_vacancies)
        } else {
            chartData.push(0)
        }


        if (data.phase_2c_applicants != -1) {
            chartData.push(data.phase_2c_vacancies >= data.phase_2c_applicants ? data.phase_2c_applicants : data.phase_2c_vacancies)
        } else {
            chartData.push(0)
        }


        if (data.phase_2cs_applicants != -1) {
            chartData.push(data.phase_2cs_vacancies >= data.phase_2cs_applicants ? data.phase_2cs_applicants : data.phase_2cs_vacancies)
        } else {
            chartData.push(0)
        }


        if (data.phase_2cs_vacancies != -1) {
            chartData.push(data.phase_2cs_vacancies >= data.phase_2cs_applicants ? data.phase_2cs_vacancies - data.phase_2cs_applicants : 0)
        } else {
            chartData.push(data.total_vacancy - data.phase_2a_applicants)
        }
        return chartData
    }

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
                            <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
                                <h2>{item.school} ({item.year})</h2>
                                <SchoolRegResultChartPage chartData={chartData(item)} />
                                <table className="ui celled unstackable striped compact table">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Vacancies</th>
                                            <th>Applicants</th>
                                            <th>Ballot</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Phase 2A</td>
                                            <td>{item.phase_2a_vacancies}</td>
                                            <td>{item.phase_2a_applicants}</td>
                                            <td>{item.phase_2a_ballot}</td>
                                        </tr>
                                        <tr>
                                            <td>Phase 2B</td>
                                            <td>{item.phase_2b_vacancies}</td>
                                            <td>{item.phase_2b_applicants}</td>
                                            <td>{item.phase_2b_ballot}</td>
                                        </tr>
                                        <tr>
                                            <td>Phase 2C</td>
                                            <td>{item.phase_2c_vacancies}</td>
                                            <td>{item.phase_2c_applicants}</td>
                                            <td>{item.phase_2c_ballot}</td>
                                        </tr>
                                        <tr>
                                            <td>Phase 2CS</td>
                                            <td>{item.phase_2cs_vacancies}</td>
                                            <td>{item.phase_2cs_applicants}</td>
                                            <td>{item.phase_2cs_ballot}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="">
                                        <tr className="">
                                            <th colSpan="4" className="right aligned">
                                                <p>Total Vacancy: {item.total_vacancy}</p>
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>

                            </div>
                        ))
                    ) : (
                        <p>No results found for {school}</p>
                    )}
                    <Button compact color={COLORS.semantic_primary} onClick={() => history.push(`/schools/${school}`)}>Return to Listing</Button>
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