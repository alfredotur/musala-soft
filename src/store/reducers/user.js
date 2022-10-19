const loginUser = (state = {
    userName: {},
    userData: '',
    userService: '',
    userAccount: '',
    serviceOpen: false,
    dialogOpen: false,
    dialogOpenRegistrar: false,
    dialogOpenForgotPassword: false,
    AccountOperation: '',
    accessToken: '',
    lang: 'es',
    notices: [],
    timerActive: true,
    minutes: 3,
    seconds: 0,
    actualizarPerfil: false,
    secondsactualizarPerfil: 5,
    fechaActualizacion: '',
    drawerOpen: false
}, action) => {
    if (action.type === "LOGIN_USER") {
        state = {
            ...state,
            accessToken: action.token,
            userName: action.username,
            userData: action.userData
        }
    } else if (action.type === "FILL_USER") {
        state = {
            ...state,
            userData: action.userData
        }
    } else if (action.type === 'ACTUALIZA_FECHA_ULTIMA') {
        state = {...state, fechaActualizacion: action.fecha}
    } else if (action.type === "FILL_NOTICES") {
        state = {
            ...state,
            notices: action.notices
        }
    } else if (action.type === 'ACTUALIZA_PERFIL') {
        state = {...state, actualizarPerfil: action.actualiza}
    } else if (action.type === "DRAWER_OPEN") {
        state = {
            ...state, drawerOpen: action.drawerOpen
        }
    }

    return state
}

export default loginUser;