import { Route, Redirect } from "react-router-dom"
import { useContext } from "react"
// import AuthContext from "../context/AuthContext"
import AuthContext from "../../auth/context/AuthContext"

// This is a wrapper for Route. 
// It is responsible to check if there is a valid user
// Render the route if user is valid
// else, it will redirect them to LoginPage
const PrivateRoute = ({ children, ...rest }) => {
    let { user } = useContext(AuthContext)
    return (
        <Route {...rest}>{!user ? <Redirect to='/login' /> : children}</Route>
    )
}

export default PrivateRoute