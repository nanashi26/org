import { useState } from "react"
import "./campo.css"

const Campo = (props) => {

    //Detructuración
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{ props.titulo }</label>
        <input 
        placeholder = {props.placeholder} 
        required={props.requerido} 
        value={props.valor} 
        onChange={manejarCambio}
        type={type} //El segundo {Type} es el que se esta tomando de "props"
        />
    </div>
}

export default Campo