import React, { useEffect, useState } from "react";
import "./Busqueda.css";

import FormAutomaticos from "../FormFacturas/FormAutomaticos";
import FormFacturas from "../FormFacturas/FormFacturas";

const Busqueda = () => {

    const [checked, setChecked] = React.useState(true);

    const check = (bol) => {
        setChecked(bol)
    }

    return (
        <div className="contenedorBusqueda">
            <div className="botones">
                <div className={checked ? 'boton selected' : 'boton'} onClick={() => check(true)}>
                    <button className='opcion'>Ingrese sus datos</button>
                </div>
                <div className={!checked ? 'boton selected' : 'boton'} onClick={() => check(false)}>
                    <button className='opcion'>Pagos automáticos</button>
                </div>
            </div>
            <div className="content">
                {checked ? <FormFacturas /> : <FormAutomaticos />}
            </div>
        </div>
    )
}

export default Busqueda
