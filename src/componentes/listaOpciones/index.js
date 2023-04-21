/*En esta caso el nombre del archivo se coloca "index" para que al momento de importar
el archivo no se tenga que colocar toda la direccion, esto se puede apreciar en "Formulario.js" cuando se importa*/

import "./listaOpciones.css"

const ListaOpciones = (props) =>{

    //Método MAP --> ESTE ES UN METODO ESPECIFICO DE LOS ARREGLOS

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>{ props.titulo }</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>{props.placeholder}</option>
            {props.equipos.map( (item,index) => <option key={index}>{item}</option>)}
        </select>
    </div>
}

export default ListaOpciones