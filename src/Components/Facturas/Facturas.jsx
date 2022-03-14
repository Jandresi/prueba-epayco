import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Facturas.css'

const Facturas = () => {
    const navigate = useNavigate();

    return (
        <div className='contenedorFacturas'>
            <div className="headerFacturas col-12">
                <button id='botonAtras' onClick={() => navigate('/')}>
                    <img src="https://multimedia.epayco.co/dashboard/recaudo/proyecto/imagenes/back.png" alt="" />
                </button>
                <div id='tituloListado'>
                    <h6>Listado</h6>
                </div>
            </div>

            <div className="cuerpo col-12">

                <div className="factura">
                    <div className="datos col-10">
                        <div>
                            <h6 className='titulo-dato'>Valor</h6>
                            <span className='valor'>$10.000 COP</span>
                        </div>
                        <div>
                            <h6 className='titulo-dato'>Número factura</h6>
                            <span className='valor'>123456</span>
                        </div>
                        <div>
                            <h6 className='titulo-dato'>Fecha vencimiento</h6>
                            <span className='valor'>2099-04-15 23:59:59</span>
                        </div>
                    </div>
                    <button className='boton-pagar'>Pagar</button>
                </div>

                <div className="factura">
                    <div className="datos col-10">
                        <div>
                            <h6>Valor</h6>
                            <span className='valor'>$50.000 COP</span>
                        </div>
                        <div>
                            <h6>Número factura</h6>
                            <span className='valor'>123456</span>
                        </div>
                        <div>
                            <h6>Fecha vencimiento</h6>
                            <span className='valor'>2099-04-15 23:59:59</span>
                        </div>
                    </div>
                    <button className='boton-pagar'>Pagar</button>
                </div>
            </div>
        </div>
    )
}

export default Facturas
