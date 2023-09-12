import React, { Component } from "react";
import '../componentsStyles/VerificarCorreo.css';

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutos: 4,
            segundos: 47,
        };
    }

    componentDidMount() {
        // Iniciar el contador cuando el componente se monta
        this.interval = setInterval(this.actualizarContador, 1000);
    }

    componentWillUnmount() {
        // Detener el contador cuando el componente se desmonta
        clearInterval(this.interval);
    }

    actualizarContador = () => {
        const { minutos, segundos } = this.state;

        if (minutos === 0 && segundos === 0) {
            clearInterval(this.interval); // Detener el contador cuando llegue a 0
        } else {
            if (segundos === 0) {
                this.setState({ minutos: minutos - 1, segundos: 59 });
            } else {
                this.setState({ segundos: segundos - 1 });
            }
        }
    };

    render() {
        const { minutos, segundos } = this.state;
        return (
            <div id="VerificarCorreo" className="position-absolute top-0 end-0 ">
                <div id='formVerificar' className='row d-flex align-items-center formulario bg_primario ps-5 pt-2 pb-2 pe-5'>
                    <h1 className="txt_auxiliar fw-bold text-center">VERIFICACIÓN CORREO</h1>
                    <h4 className="txt_primario fs-5 text-center">ESTIMADO USUARIO</h4>
                    <h4 className="txt_primario fs-5 text-center">Hemos enviado un código de verificación al correo proporcionado.
                        Ingrésalo para verificar tu cuenta
                    </h4>
                    <h5 className="row">No olvides revisar tu bandeja de Spam si el correo no aparece</h5>
                    <input type="number" placeholder="CÓDIGO" />
                    <div className="row">
                        <div className="col-6 txt_auxiliar">
                            Vence en {minutos < 10 ? '0' + minutos : minutos}:{segundos < 10 ? '0' + segundos : segundos}
                        </div>
                        <div className="col-6 txt_auxiliar text-end">
                            Reenviar código
                        </div>
                    </div>
                    <div className='row  '>
                        <a href="/" className="d-flex justify-content-center">
                            <button className="btn bg_terciario txt_primario" >CONFIRMAR CORREO</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contador;
