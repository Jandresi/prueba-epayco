// Constantes
const tokenInicial = {
    config: [],
}

const GET_CONFIG = 'GET_CONFIG'

// Reducers
export default function configReducer(state = tokenInicial, action) {
    switch(action.type) {
        case GET_CONFIG:
            return {...state, config: action.payload}
        default:
            return state
    }
}

// Acciones
export const getConfigAccion = (tok, doc) => async(dispatch, getState) => {
    try {
        const config = await fetch("https://apify.epayco.co/billcollect/proyect/config/consult", {
            method: "post",
            body: JSON.stringify({
                "projectId":29,
                "document":doc
            }),
            headers: {
                Authorization: "Bearer " + tok,
                "Content-type": "application/json"
            },
            mode: "cors",
            cache: "default",
        });
        const resConfig = await config.json().then(res => res.data)

        let keys = [];
        resConfig.filter(item => {
            keys.push(item.name);
        })
        dispatch({
            type: GET_CONFIG,
            payload: keys
        })
    } catch (e) {
        console.log(e)
    }
}