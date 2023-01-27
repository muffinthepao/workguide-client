import {Navigate} from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { DateTime } from "luxon";

function Auth(props) {

    // write our auth checking logic here in a single place

    // retreive token from localstorage
    // if not exist, redirect to login page
    const token = localStorage.getItem('user_token')
    if (!token) {
        return (
            <Navigate to={'/auth'} />
        )
    }

    // check if token expired
    // if expired, purge localstorage, redirect to login
    const user = jwt_decode(token)

    console.log(user)
    const now = DateTime.now().toUnixInteger()

    if (user.exp < now) {
        localStorage.removeItem('user_token')
        return (
            <Navigate to={'/auth'} />
        )
    }
    
    // render props.component
    return (
        <props.component></props.component>
    )
}

export default Auth