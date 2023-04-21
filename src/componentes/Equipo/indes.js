import "./equipo.css" //Se importan los estilos ya que en esta parte es donde se invocan los "className" y se aplican los estilos que se definen en el otro archivo.
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba";


const Equipo = (props) =>{
    //Destructuración
    const {titulo, colorPrimario, colorSecundario,id} = props.datos
    const {colaboradores, eliminar, actualizandoColor, like} = props

    const fondo = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={ fondo }>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizandoColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador,index) => 
                        <Colaborador datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminar={eliminar}
                        like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;



/* 
ESTA ES OTRA FORMA DE HACERLO:
La unica diferencia es que en los colores se llaman desde las "props", adicional es que hay que tener especial cuidad
cuando se llaman estas propiedades, ya que se colocan el dobles llaves: style={ {borderColor: props.datos.colorPrimario} }

const Equipo = (props) =>{
    return <section className="equipo" style={ {backgroundColor: props.datos.colorSecundario} }>
        <h3 style={ {borderColor: props.datos.colorPrimario} }>{props.datos.titulo}</h3>
        <div className="colaboradores">

        </div>
    </section>
}

*/