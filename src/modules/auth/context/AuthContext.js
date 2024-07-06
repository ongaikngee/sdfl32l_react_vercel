import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ?
        JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ?
        jwtDecode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)
    let [errors, setErrors] = useState({})

    // const base_url = 'http://localhost:8000' 
    const base_url = 'https://ongaikngee.pythonanywhere.com'

    const history = useHistory()

    const validate = (e) => {
        let tempErrors = {}
        if (!e.target.username.value) tempErrors.username = 'Username is required'
        if (!e.target.password.value) tempErrors.password = 'Password is required'
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    };

    let loginUser = async (e) => {
        e.preventDefault()
        if (validate(e)) {
            let response = await fetch(`${base_url}/api/token/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: e.target.username.value,
                    password: e.target.password.value
                })
            })
            let data = await response.json()

            if (response.status === 200) {
                setAuthTokens(data)
                setUser(jwtDecode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
                history.push('/')
            } else {
                alert(`Something went wrong!, Status: ${response.status}`)
            }
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history.push('/login')
    }

    let updateToken = async () => {
        let response = await fetch(`${base_url}/api/token/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refresh: authTokens?.refresh
            })
        })
        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }

        if (loading) {
            setLoading(false)
        }
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        errors: errors,
        loginUser: loginUser,
        logoutUser: logoutUser
    }

    useEffect(() => {
        if (loading) {
            updateToken()
        }
        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}