import React from 'react';
import Encabezado from '../components/Encabezado'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import '../routesStyles/horarioStyle.css'

function Horarios() {
    return (
        <div>
            <Encabezado />
            <Menu />

            <div id='horario' className='row d-flex justify-content-center ps-4 pe-5 pb-3'>
                <div className='row'>
                    Inicio - Cartelera - Horarios
                </div>
                <div id='informacionPelicula' className='col-3  mt-3 borderHorario'>
                    <img role='img' id='portada' className='mt-2' src={require('../images/spidermanPelicula.jpg')} alt="Portada película Spiderman" />
                    <div className='row mt-3 borderInformacion pb-2'>
                        <text className='fs-5 fw-bold'>TÍTULO ORIGINAL</text>
                        <text className='fs-6 fw-lighter txt_auxiliar'>SPIDER-MAN A TRAVES DEL SPIDER-VERSO</text>
                    </div>
                    <div className='row mt-3 borderInformacion pb-2'>
                        <text className='fs-5 fw-bold'>REPARTO</text>
                        <text className='fs-6 fw-lighter txt_auxiliar'>Hailee Steinfeld, Shameik Moore</text>
                    </div>
                    <div className='row mt-3 borderInformacion pb-2'>
                        <text className='fs-5 fw-bold'>SINOPSIS</text>
                        <text className='fs-6 fw-lighter txt_auxiliar'>Miles Moreales emprende una aventura a través del multiverso con Gwen Stacy y un nuveo quipo de la Spider People que deben enfrentar a un poderoso villano ...</text>
                    </div>
                    <div className='row mt-3 pb-2'>
                        <text className='fs-5 fw-bold'>CLASIFICACIÓN</text>
                        <text className='fs-6 fw-lighter txt_auxiliar'>Todo público</text>
                    </div>
                </div>
                <div className='col-8 ps-5 mt-3'>
                    <div className='row'>
                        <div className='col-4'>
                            <label htmlFor="ubicacionUsuario" for='ubicacionUsuario'>Ciudad</label>
                            <select aria-label="Ciudad del usuario" name='ubicacionUsuario' className='txt_secundario ms-3'>
                                <option className='txt_auxiliar' disabled selected defaultValue="">Seleccione su ciudad</option>
                                <option className='txt_secundario'>Ambato</option>
                                <option className='txt_secundario'>Guayaquil</option>
                                <option className='txt_secundario'>Latacunga</option>
                                <option className='txt_secundario'>Quito</option>
                            </select>
                        </div>
                        <div className='col-6'>
                            <label htmlFor="teatro">Teatro:</label>
                            <select aria-label="Teatro seleccionado" name='teatro' className='txt_secundario ms-3'>
                                <option className='txt_auxiliar' disabled selected defaultValue="">Seleccione el teatro de su preferencia</option>
                                <option className='txt_secundario'>Paseo San Francisco</option>
                                <option className='txt_secundario'>Plaza Américas</option>
                            </select>
                        </div>
                        {/* FECHAS*/}
                        <div className='row ms-1 ps-5 mt-3 bg_fechas pt-2'>
                            <div className='col-2 txt_primario fw-bold'>
                                <div className='row text-center pe-4'>
                                    <text>MAR.</text>
                                </div>
                                <div className='row text-center'>
                                    <text className='row'>20 JUN. 2023</text>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row text-center pe-4'>
                                    <text>MIÉ.</text>
                                </div>
                                <div className='row text-center'>
                                    <text className='row'>21 JUN. 2023</text>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row text-center pe-4'>
                                    <text>JUE.</text>
                                </div>
                                <div className='row text-center'>
                                    <text className='row'>22 JUN. 2023</text>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row text-center pe-4'>
                                    <text>VIE.</text>
                                </div>
                                <div className='row text-center'>
                                    <text className='row'>23 JUN. 2023</text>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row text-center pe-4'>
                                    <text>SAB.</text>
                                </div>
                                <div className='row text-center'>
                                    <text className='row'>24 JUN. 2023</text>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row text-center pe-4'>
                                    <text>DOM.</text>
                                </div>
                                <div className='row text-center'>
                                    <text className='row'>25 JUN. 2023</text>
                                </div>
                            </div>     
                        </div>
                        {/* HORARIOS */}
                        <div className='mt-3 borderHorario'>
                            <h2 className='txt_primario fw-bold'>CINEMARK PASEO SAN FRANCISCO</h2>
                            <text className='txt_auxiliar row ps-3 fs-3'>Av. Interoceanica y Francisco de Orellana</text>
                            {/* Tabla de horarios por tipo de función */}
                            <div className='row borderHorario gx-5 ms-2 me-0 pb-3'>
                                <text className='mb-2'>*Los horarios aquí expuestos representan el inicio de cada función</text>
                                <div className='col-6 mb-2'>
                                    <div className='row borderHorario pt-1 pb-1 ps-1'>
                                        <text className='col-2 bg_auxiliar  txt_secundario bg_tipoSala text-center'>2D</text>
                                        <text className='col-5 bg_terciario bg_tipoSala'>SUBTITULADO </text>
                                        <text className='col-5'>Sillas: GENERAL</text>
                                    </div>
                                    <div className='row borderHorario pt-1 pb-1'>
                                        <text className='col-2 me-3 ms-3 bg_horarios'>13:15</text>
                                        <text className='col-2 me-3 ms-3 bg_horarios'>18:45</text>
                                        <text className='col-2 me-3 ms-3 bg_horarios'>21:40</text>
                                    </div>
                                </div>

                                <div className='col-6 mb-2'>
                                    <div className='row borderHorario pt-1 pb-1 ps-1'>
                                        <text className='col-2 bg_auxiliar  txt_secundario bg_tipoSala text-center'>2D</text>
                                        <text className='col-5 bg_terciario bg_tipoSala'>SUBTITULADO</text>
                                        <text className='col-5'>Sillas: GENERAL</text>
                                    </div>
                                    <div className='row borderHorario pt-1 pb-1'>
                                        <text className='col-2 me-3 ms-3 bg_horarios'>13:15</text>
                                        <text className='col-2 me-3 ms-3 bg_horarios'>18:45</text>
                                        <text className='col-2 me-3 ms-3 bg_horarios'>21:40</text>
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <div className='row borderHorario pt-1 pb-1 ps-1'>
                                        <text className='col-2 bg_auxiliar  txt_secundario bg_tipoSala text-center'>2D</text>
                                        <text className='col-5 bg_terciario bg_tipoSala'>SUBTITULADO</text>
                                        <text className='col-5'>Sillas: GENERAL</text>
                                    </div>
                                    <div className='row borderHorario pt-1 pb-1'>
                                        <text className='col-2 me-3 ms-3 bg_horarios'>13:15</text>
                                        <text className='col-2 me-3 ms-3 bg_horarios'>18:45</text>
                                        <text className='col-2 me-3 ms-3 bg_horarios'>21:40</text>
                                    </div>
                                </div>
                            </div>
                            <iframe className='mt-3' width="100%" height="420" src="https://www.youtube.com/embed/oBmazlyP220?si=MpyH7pj2biD9hdxV&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Horarios;