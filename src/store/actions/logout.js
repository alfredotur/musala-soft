import Cookies from "js-cookie";

export const logout = (dispatch) =>{
    Cookies.remove('access_token')
    localStorage.removeItem('accessLogin')
    localStorage.removeItem('tipoCuenta')
    localStorage.removeItem('persist:root')
    localStorage.clear()
    dispatch({ type: "LOGOUT_USER" })
}