import { useState, useEffect } from 'react'
import { APP_SETTING, P1_REG_SETTING, COLORS } from '../../common/constants/common'
import { useParams } from 'react-router-dom';

export default function SemanticSchoolResultPage() {

    const { id } = useParams(); // Get the id parameter from the URL
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getAPI()
    }, [])

    const getAPI = async () => {
        console.log('Come to singapore.....', id)
        setLoading(true)
        const base_url = APP_SETTING.base_url_for_backend
        const url = base_url + `p1_reg_results/${id}/`

        const response = await fetch(url, {
            method: 'GET'
        })
        const data = await response.json()

        if (response.status === 200) {
            console.log("getting reuslt....", data)
            setResult(data)
        } else {
            console.log('Something went wrong!')
        }
    }


    return (
        <div>
            <h1>Welcome</h1>
            <h1>API Data</h1>
            <ul>
                {result && Object.keys(result).map(key => (
                    <li key={key}>
                        <strong>{key}</strong>: {result[key]}
                    </li>
                ))}
            </ul>
        </div>
    )
}