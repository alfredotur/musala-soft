const operation = (
    state = {
        url: '',
        parameters: '',
        metodo: '',
        operation_info: '',
        formData: '',
        dataFields: [],//todos los campos de la operacion son sus valores. se llena al aplicar
        process: false,//indica si se esta procesando la operacion
    }, action
) => {
    if (action.type === 'STORE_OPERATION') {
        state= {...state, url: action.url, parameters: action.parameters, metodo: action.metodo, operation_info: action.operation_info }
    } else if (action.type === 'STORE_DATA') {
        state = {...state, formData: action.formData}
    } else if (action.type === "FILL_DATAFIELDS") {
        state = {
            ...state,
            dataFields: action.data
        }
    } else if (action.type === "START_OPERATION") {
        state = {
            ...state,
            process: action.start
        }
    }
    return state;
}

export default operation
