// Constantes
const facturaInicial = {
    factura: []
}

const GET_FACTURA = 'GET_FACTURA'

// Reducers
export default function facturaReducer(state = facturaInicial, action) {
    switch(action.type) {
        case GET_FACTURA:
            return {...state, factura: action.payload}
        default:
            return state
    }
}

// Acciones
export const getFacturaAccion = (tok, doc) => async(dispatch, getState) => {
    try {
        const factura = await fetch("https://apify.epayco.co/billcollect/invoices/consult", {
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
        const resFactura = await factura.json()
        console.log(resFactura);
        dispatch({
            type: GET_FACTURA,
            payload: resFactura
        })
    } catch (e) {
        console.log(e)
    }
}
