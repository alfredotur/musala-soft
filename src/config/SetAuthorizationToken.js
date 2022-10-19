import axios from 'axios'
import CryptoJS from 'crypto-js';
import moment from 'moment';

export default function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] =  `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }

    if(process.env.REACT_APP_SERVER_KEY==1)
    {
        console.log(process.env.REACT_APP_SERVER_KEY)
        const d = moment().format('DDMMyyyyHH');
        const day =d.toString();

        const usuario = "portal";
        const semilla = "externalPortal";
        const pass = usuario+day+semilla;

        var hash = CryptoJS.SHA512(pass);

        var hex = hash.toString(CryptoJS.enc.Base64);

        axios.defaults.headers.common['usernameApp'] =  `portal`
        axios.defaults.headers.common['passwordApp'] =  `ApiKey ${hex}`
    }
}
