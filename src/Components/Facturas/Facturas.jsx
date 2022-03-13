import React from 'react'
import './Facturas.css'

const Facturas = () => {
    return (
        <div className='contenedorFacturas'>
            <div className="headerFacturas">
                <button id='botonAtras'>
                    <img src="https://multimedia.epayco.co/dashboard/recaudo/proyecto/imagenes/back.png" alt="" />
                </button>
                <div id='tituloListado'>
                    <h5>Listado</h5>
                </div>
            </div>

            <div className="cuerpo">
                <div className="factura col-12">
                    <div className="datos col-10">
                        <div className="valor">
                            <h6>Valor</h6>
                            <span>$10.000 COP</span>
                        </div>
                        <div className="numeroFact">
                            <h6>Número factura</h6>
                            <span>123456</span>
                        </div>
                        <div className="fechaVenc">
                            <h6>Fecha vencimiento</h6>
                            <span>2099-04-15 23:59:59</span>
                        </div>
                        <button className='btn btn-primary col-2'>Pagar</button>
                    </div>
                </div>

                <div className="factura">
                    <div className="datos">
                        <div className="valor">
                            <h6>Valor</h6>
                            <span>$10.000 COP</span>
                        </div>
                        <div className="numeroFact">
                            <h6>Número factura</h6>
                            <span>123456</span>
                        </div>
                        <div className="fechaVenc">
                            <h6>Fecha vencimiento</h6>
                            <span>2099-04-15 23:59:59</span>
                        </div>
                        <button className='btn btn-primary'>Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facturas
