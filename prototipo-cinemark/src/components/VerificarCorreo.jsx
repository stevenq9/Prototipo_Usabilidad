import React from "react";

function VerificarCorreo() {
    return (
        <div id="VerificarCorreo">
            <h1>VERIFICACIÓN CORREO</h1>
            <h3>ESTIMADO USUARIO</h3>
            <h3>Hemos enviado un código de verificación al correo proporcionado.
                Ingresalo para verificar tu cuenta
            </h3>
            <h5>No olvides revisar tu bandeja de Spam si el correo no aparece</h5>
            <input type="number" placeholder="CÓDIGO"/>
            <div className="row">
                <div className="col">
                    Vence en 04:47
                </div>
                <div className="col">
                    Reenviar código
                </div>
            </div>
            <button>CONFIRMAR CORREO</button>
        </div>
    );
}

export default VerificarCorreo;