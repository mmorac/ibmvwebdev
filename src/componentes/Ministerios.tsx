import React from "react";

const Ministerios: React.FC = () =>{
    return(
        <div>
            <div className="titulo">
                <h2>Ministerios</h2>
            </div>
            <div className="contenido">
                <div className="ministerio_ninos">
                    <p>
                        Niños
                    </p>
                </div>
                <div className="ministerio_jovenes">Jóvenes</div>
                <div className="ministerio_hombres">Hombres</div>
                <div className="ministerio_mujeres">Mujeres</div>
                <div className="ministerio_misiones">Misiones</div>
            </div>
        </div>
    );
}

export default Ministerios;