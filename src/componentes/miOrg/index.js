import { useState } from "react"
import "./miOrg.css"

const Org = (props) => {
    return <section className="org-section">
        <h3 className="titulo">Mi Organización</h3>
        <img src="./img/add_button.png" alt="añadir" onClick={props.propActualizador} />
    </section>
}

export default Org
