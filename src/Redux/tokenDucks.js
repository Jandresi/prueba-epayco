// Constantes
const tokenInicial = {
    token: '',
}

const GET_TOKEN = 'GET_TOKEN'

// Reducers
export default function tokenReducer(state = tokenInicial, action) {
    switch(action.type) {
        case GET_TOKEN:
            return {...state, token: action.payload}
        default:
            return state
    }
}

// Acciones
export const getTokenAccion = () => async(dispatch, getState) => {
    try {
        const api = await fetch("https://apify.epayco.co/login/mail", {
            method: "post",
            headers: {
                Authorization: "Basic " + btoa("pruebafront@payco.co:pruebafront$2020"),
            },
            mode: "cors",
            cache: "default",
        });
        const token = await api.json().then(res => res.token);
        dispatch({
            type: GET_TOKEN,
            payload: token
        })
    } catch (e) {
        console.log(e)
    }
}
