import React from "react";

const Visita: React.FC = () => {
    return (
        <div>
            <div className="titulo">
                <h1>Visítanos</h1>
            </div>
            <div></div>
            <div className="direcciones">
                <div className="subtituloVisita">
                    <h3 className="vertical-align">¿Cuándo?</h3>
                </div>
                <p>
                    Culto de oración - Miércoles 19:30.
                </p>
                <p>
                    Reunion de jóvenes - Sábado 12:00
                </p>
                <p>
                    Cultos generales - Domingo 10:00 y 12:30
                </p>
                <p>
                    Escuela dominical - Domingo 11:15
                </p>
                <div className="subtituloVisita">
                    <h3 className="vertical-align">¿Dónde?</h3>
                </div>
                <p>
                    Estamos en la calle Sahagún 28 en Alcorcón, con acceso cercano desde RENFE, autobús y Metro.
                </p>
                <p>
                    Puedes llegar desde la línea C-5 de Cercanías Madrid (estación San José de Valderas), autobús interurbano 513 desde Príncipe Pío (parada Avenida de Lisboa - Centro de Salud) y a la estación Parque Lisboa del Metro Sur, línea 12.
                </p>
            </div>
            <div className="container">
                <div className="contenedorimagenvisita">
                    <img className="como_llegar" src="/img/ibmv_transporte.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Visita;