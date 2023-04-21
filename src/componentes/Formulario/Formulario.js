import { useState } from "react";
import "./Formulario.css"
import Campo from "../campo/campoTexto";
import ListaOpciones from "../listaOpciones"; //Como se puede ver, ya no se coloca el nombre del archivo en la ruta, ya que como se llama "index", automaticamente lo detecta.
import Boton from "../boton";
import Equipo from "../Equipo/indes";

//Después del "return" se coloca el código y de esta forma se hace un componente en React
//Importante destacar que SIEMPRE SON FUNCIONES
const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [cargo,actualizarCargo] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")
    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")

    const { nuevoColaborador,crearEquipo } = props


    const envioData = (event) =>{
        event.preventDefault();
        console.log("Envio de la data del colaborador");
        let datosEnviados = {
            nombre: nombre,
            cargo: cargo,
            foto: foto,
            equipo: equipo
        }
        props.nuevoColaborador(datosEnviados)
    }

    const envioDataEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo: titulo, colorPrimario: color})
    }


    return <section className="formulario">
        <form onSubmit={envioData}>
            <h2>Completa el formulario para crear al colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresa el nombre" 
                requerido={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            /> {/*Aca se manda a llamar el input llamado "CampoTexto", se importa para que a pesar de estar en otro doc, se pueda usar acá*/}
            
            <Campo
                titulo="Cargo" 
                placeholder="Ingresa el cargo del colaborador" 
                requerido 
                valor={cargo} 
                actualizarValor={actualizarCargo} 
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresa el enlace de la foto"
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                titulo="Equipo" 
                valor={equipo}
                actualizarValor = {actualizarEquipo}
                placeholder="Selecciona el equipo al que pertenece el colaborador"
                equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>

        <form onSubmit={envioDataEquipo}>
            <h2>Completa el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Título" 
                placeholder="Ingresa título" 
                requerido={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            /> {/*Aca se manda a llamar el input llamado "CampoTexto", se importa para que a pesar de estar en otro doc, se pueda usar acá*/}
            
            <Campo 
                titulo="Color" 
                placeholder="Ingresa el color en formato HEX" 
                requerido 
                valor={color} 
                actualizarValor={actualizarColor}
                type="color" 
            />
            <Boton texto="Registrar"/>
        </form>
    </section>
}

export default Formulario;