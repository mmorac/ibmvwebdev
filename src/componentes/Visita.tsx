import React from "react";

const Visita: React.FC = () =>{
    return(
        <div>
            <div className="titulo"> 
                <h2>Visítanos</h2>
            </div>
            <div className="direcciones">
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