import React from "react";

const Contacto: React.FC = () =>{
    return(
        <div className="contacto_container">
            <div className="social_container">
                <a href="https://www.facebook.com/IglesiaBautistaMasVida1" target="_blank"><img className="social" src="/img/ibmv_fb.png" alt="" /><br/>Iglesia Bautista Más Vida</a>
            </div>
            <div className="social_container">
                <a href="https://www.instagram.com/masvida.alcorcon" target="_blank"><img className="social" src="/img/ibmv_ig.png" alt="" /><br/>Iglesia Bautista Más Vida</a>
            </div>
            <div className="social_container">
                <a href="mailto:pastormeyermasvida@icloud.com" target="_blank"><img className="social" src="/img/ibmv_email.png" alt="" /><br/>pastormeyermasvida@icloud.com</a>
            </div>
            <div className="social_container">
                <a href="https://wa.me/34671125688" target="_blank"><img className="social" src="/img/ibmv_wa.png" alt="" /><br/>671125688</a>
            </div>
        </div>
    );
}

export default Contacto;