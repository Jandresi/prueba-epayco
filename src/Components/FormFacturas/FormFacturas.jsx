import React, { useEffect, useState } from "react";
import './FormFacturas.css'
import { useDispatch, useSelector } from "react-redux";
import { getTokenAccion } from "../../Redux/tokenDucks";
import { getConfigAccion } from "../../Redux/configDucks";
import { getFacturaAccion } from "../../Redux/facturaDucks";

const FormFacturas = () => {
    
    const dispatch = useDispatch();
    const getToken = useSelector(store => store.token.token)

    const[datos, setDatos] = useState({
        numero: '',
        token: ''
    });
    
    useEffect(() => {
        dispatch(getTokenAccion());
    }, [])

    const submit = (event) =>{
        event.preventDefault();
        dispatch(getConfigAccion(getToken, datos.numero));
        dispatch(getFacturaAccion(getToken, datos.numero));
    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
            token: getToken
        });
    }


  return (
    <div className="formulario">
        <div className="titulo text-muted">
            <small>Consulte sus facturas</small>
        </div>
        <div>
            <label className="label">Número de identificación del usuario</label>
            <form method="post" onSubmit={submit} autoComplete="off">
                <input
                type="text"
                name="numero"
                required="required"
                maxLength={500}
                className='form-control'
                onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary boton-accion">
                    Continuar
                </button>
            </form>
        </div>
    </div>
  );
};

export default FormFacturas;
