import Cookies from 'js-cookie';

export const checkLogged = () => {
    const token = Cookies.get('access_token')
    if (token === undefined) {
        localStorage.removeItem('accessLogin')
        localStorage.removeItem('tipoCuenta')
        localStorage.removeItem('persist:root')
        localStorage.clear()
    }
    return !!token;
}