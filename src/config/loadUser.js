import setAuthorizationToken from "./SetAuthorizationToken";
import axios from "axios";
import * as config from "./globals";
import Cookies from 'js-cookies'
import {
    fillUser
} from "../store/actions/fillUser";



export default function loadUser() {
    const getToken = Cookies.get('access_token')
    const user = localStorage.getItem('accessLogin')

    if (getToken) {
        setAuthorizationToken(getToken)
        axios.post(`${config.base.urlbase}queryServiciosPorAcceso?accessLogin=${user}`)
            .then((user) => {
                fillUser(user.data)
            })
    }
}