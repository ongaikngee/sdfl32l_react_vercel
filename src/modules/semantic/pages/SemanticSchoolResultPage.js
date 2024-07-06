import { useState, useEffect } from 'react'
import { APP_SETTING } from '../../common/constants/common'
import { useParams } from 'react-router-dom';
import { GridRow, GridColumn, Dimmer, Loader, Label } from 'semantic-ui-react';

export default function SemanticSchoolResultPage() {

    const { id } = useParams(); // Get the id parameter from the URL
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    useEffect(() => {
        getAPI()
    }, [])

    const getAPI = async () => {
        setError(null)
        setLoading(true)
        const base_url = APP_SETTING.base_url_for_backend
        const url = base_url + `p1_reg_results/${id}/`

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
            <h1>Welcome</h1>
            <h1>API Data</h1>
            {loading ? (
                <GridRow style={{ height: '200px' }}>
                    <GridColumn>
                        <Dimmer active inverted>
                            <Loader indeterminate size='large'>Getting School Listing</Loader>
                        </Dimmer>
                    </GridColumn>
                </GridRow>
            ) : (
                <ul>
                    {result && Object.keys(result).map(key => (
                        <li key={key}>
                            <strong>{key}</strong>: {result[key]}
                        </li>
                    ))}
                </ul>
            )}
            {error && (
                <Label basic color='red'>
                    {error}
                </Label>
            )}
        </div>
    )

}