import React, { useEffect, useState } from "react";
import './FormFacturas.css'

const FormAutomaticos = () => {
    const [token, setToken] = React.useState('')

    const getToken = async(event) => {
        event.preventDefault();
        const api = await fetch("https://apify.epayco.co/login/mail", {
            method: "post",
            headers: {
                Authorization: "Basic " + btoa("pruebafront@payco.co:pruebafront$2020"),
            },
            mode: "cors",
            cache: "default",
            });
        const token = await api.json().then(res => res.token);
        setToken(token);
        console.log(token);
    }
    return (
        <div className="formulario">
        <div className="titulo text-muted">
            <small>Suscriba sus facturas para pagos automáticos</small>
        </div>
        <div>
            <label className="label">Número de identificación del usuario</label>
            <form method="post" onSubmit={getToken}>
                <input type="text" name="id" id="id" maxLength={500} className='form-control' />
                <button type="submit" className="btn btn-primary boton-accion">Continuar</button>
            </form>
        </div>
    </div>
    )
}

export default FormAutomaticos
