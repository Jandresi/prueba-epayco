import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTokenAccion } from "../../Redux/epaycoDucks";
import './FormFacturas.css'

const FormFacturas = () => {

    const dispatch = useDispatch();

    const submit = (event) =>{
        event.preventDefault();
        dispatch(getTokenAccion());
    }


  return (
    <div className="formulario">
        <div className="titulo text-muted">
            <small>Consulte sus facturas</small>
        </div>
        <div>
            <label className="label">Número de identificación del usuario</label>
            <form method="post" onSubmit={submit}>
                <input type="text" name="id" id="id" maxLength={500} className='form-control' />
                <button type="submit" className="btn btn-primary boton-accion">
                    Continuar
                </button>
            </form>
        </div>
    </div>
  );
};

export default FormFacturas;
