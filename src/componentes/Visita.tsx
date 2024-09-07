import React from "react";

const Visita: React.FC = () =>{
    return(
        <div>
            <div className="titulo"> 
                <h2>Visítanos</h2>
            </div>
            <div className="container">
                <div className="contenedorimagenvisita">
                    <img className="como_llegar" src="/img/ibmv_transporte.png" alt="" />
                </div>
                <div className="contenedorimagenvisita">
                    <img className="como_llegar" src="/img/ibmv_transporte.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Visita;