import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import Org from './componentes/miOrg';
import Equipo from './componentes/Equipo/indes';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario,actualizador] = useState(false); //Al colocarse en "False", el estado incial del formulario sera Oculto.
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    cargo: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    cargo: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    cargo: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    cargo: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    cargo: "Dev FullStack",
    fav: true
  }]) //EL primer miembro del equipo ya se coloca por defecto para que, al momento de recargar la página, no aparezca nada

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(), //Esta es la funcion que genera un "ID" unico e irrepetible
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  //Ternario -- > condición ? accionVerdadera : accionFalsa
  //Lo anterior se lee como: si la condicion es verdadera(?) ejecuta "accionVerdadera" sino(:), ejecuta "accionFalsa"
  //A parte de ternario se tiene Cortocircuito: condición && acciónVerdadera
  //en el corto circuito, no se tiene la accionFalsa...No se necesita

  const cambiarActualizador = () =>{
    actualizador(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
      console.log("colaborador:", colaborador)
      //Spread Operator. Al utiliza los tres puntos "..." se esta haciendo una copia de un arreglo
      actualizarColaboradores([...colaboradores,colaborador])
  }

  //Función para elimar colaborador
  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador",id)
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !== id)  //En esta función se coloca una arrow function para que al momento que se de clic, elimine exactamente ese. En el arreglo "nuevoColaborador" se guardara en un nuevo arreglo, todos aquellos colaboradores a los que no se les de clic.
    actualizarColaboradores(nuevosColaboradores)
  }

  //Función para actualizar el color de un equipo
  const actualizandoColor = (color,id) =>{
    console.log("actualizar:", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Función para crear nuevos equipos
  const crearEquipo = (nuevoEquipo) => {
      actualizarEquipos([...equipos, { ...nuevoEquipo, id : uuid }])
  }

  //Función para que al momento de dar en "fav" se muestre o no
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map( (colaborador) => {
      if(colaborador.id === id ){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }


  return (
    <div>
      <Header/> {/*con esto se esta llamando al componente*/}
      { mostrarFormulario === true ? <Formulario equipos = {equipos.map( (equipo) => equipo.titulo)} nuevoColaborador={registrarColaborador} crearEquipo={crearEquipo}/> : <div></div> } {/*El "div" solamente es para completar la sintaxis, en realidad, este div esta vacio, también se puede colocar: <></> */}
      <Org propActualizador={cambiarActualizador}/>
      {/* A continuación, utilizaremos "map" para recorrer el arreglo "Equipos" */}
      {
        equipos.map( (equipo) => {
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
          eliminar={eliminarColaborador}
          actualizandoColor={actualizandoColor}
          like={like}
          />
        })
      }

    <Footer/>

    </div>
  );
}

export default App;
