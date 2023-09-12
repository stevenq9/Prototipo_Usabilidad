import Encabezado from '../components/Encabezado'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Pelicula from '../components/Pelicula'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Encabezado tabIndex="1" aria-label="Encabezado" />
      <Menu tabIndex="2" aria-label="Menú de navegación" />
      <Banner tabIndex="3" aria-label="Banner promocional" />
      <section role="listbox" tabIndex="0" className='row ms-5 mt-3 txt_primario d-flex align-items-center' aria-label="Sección de ubicación del usuario">
          Usted está en:
        <div className="col-1">
          <select name='ubicacionUsuario' id="ubicacionUsuario" aria-label="Ciudad del usuario" autocomplete="off">
            <option value="" disabled>Seleccione su ciudad</option>
            <option value="Ambato" className='txt_secundario'>Ambato</option>
            <option value="Guayaquil" className='txt_secundario'>Guayaquil</option>
            <option value="Latacunga" className='txt_secundario'>Latacunga</option>
            <option value="Quito" className='txt_secundario'>Quito</option>
          </select>
        </div>
      </section>

      <section className='mt-4 ms-5' aria-label="Sección de estrenos y cartelera">
        <h2 className=''>ESTRENOS/CARTELERA</h2>
        <div id='tituloEstrenos' className="col-2 bg_terciario text-center">
          <span> ESTRENO</span>
        </div>
      </section>

      <div className="row ms-5 me-5 d-flex justify-content-around" aria-label="Películas en cartelera">
        <div className='col-1 control_cartelera d-flex align-items-center'>
          <svg role="img" aria-label="clic para retroceder a la anterior película" width="2" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5704 3.51185V0.751136C17.5704 0.51185 17.2954 0.379707 17.1097 0.526136L1.00965 13.1011C0.872858 13.2075 0.762171 13.3437 0.686031 13.4994C0.609892 13.6551 0.570312 13.8261 0.570312 13.9994C0.570312 14.1726 0.609892 14.3436 0.686031 14.4993C0.762171 14.655 0.872858 14.7912 1.00965 14.8976L17.1097 27.4726C17.2989 27.619 17.5704 27.4869 17.5704 27.2476V24.4869C17.5704 24.3119 17.4882 24.144 17.3525 24.0369L4.49536 14.0011L17.3525 3.96185C17.4882 3.85471 17.5704 3.68685 17.5704 3.51185Z" fill="white" />
          </svg>
        </div>
        <div class="col-2 ms-">
          <div class="row">
            <Pelicula tabIndex="0"
              nombre='flash' />
          </div>
        </div>
        <div class="col-2">
          <div class="row">
            <Pelicula tabIndex="0"
              nombre='transformers' />
          </div>
        </div>
        <div class="col-2">
          <div class="row">
            <Pelicula tabIndex="0"
              nombre='spiderman' />
          </div>
        </div>
        <div class="col-2">
          <div class="row">
            <Pelicula tabIndex="0"
              nombre='sirenita' />
          </div>
        </div>
        <div class="col-2">
          <div class="row">
            <Pelicula tabIndex="0"
              nombre='sanMiguel' />
          </div>
        </div>
        <div className='col-1 control_cartelera d-flex align-items-center'>
          <svg role="img" tabIndex="0" aria-label="clic para retroceder a la anterior portada de la película de estreno" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0607 13.1008L0.960717 0.525837C0.918647 0.492716 0.868088 0.472133 0.814848 0.466451C0.761607 0.460769 0.707843 0.470219 0.659731 0.493716C0.611619 0.517212 0.57111 0.553803 0.542856 0.599284C0.514602 0.644766 0.499749 0.697294 0.500003 0.750837V3.51155C0.500003 3.68655 0.582146 3.85441 0.717861 3.96155L13.575 14.0008L0.717861 24.0401C0.578575 24.1473 0.500003 24.3151 0.500003 24.4901V27.2508C0.500003 27.4901 0.775003 27.6223 0.960717 27.4758L17.0607 14.9008C17.1976 14.7941 17.3083 14.6576 17.3844 14.5016C17.4605 14.3456 17.5001 14.1744 17.5001 14.0008C17.5001 13.8273 17.4605 13.656 17.3844 13.5001C17.3083 13.3441 17.1976 13.2076 17.0607 13.1008Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className='row d-flex justify-content-center' aria-label="Botón para ver todas las películas">
        <div role='button' tabIndex="0" className='bg_terciario btn txt_primario'>
          VER TODAS LAS PELÍCULAS
        </div>
      </div>

      <section className='mt-4 ms-5 me-5' aria-label="Sección de recomendados">
        <h2 className=''>RECOMENDADOS</h2>
        <div className='row me-5 d-flex justify-content-around' aria-label="Botones de recomendados">
          <div role='button' tabIndex="0" className='bg_terciario btn txt_primario '>
            Contenido DBOX
          </div>
          <div role='button' tabIndex="0" className='btn_bordes btn txt_primario'>
            Contenido IMAX
          </div>
          <div role='button' tabIndex="0" className='btn_bordes btn txt_primario '>
            Contenido PREMIER
          </div>
          <div role='button' tabIndex="0" className='btn_bordes btn txt_primario me-5'>
            Contenido XD
          </div>
        </div>

        <div id='DBOX' class="row me-5 mt-4">
          <h3>DBOX</h3>
          <p>TRANSFORMERS: EL DESPERTAR DE LAS BESTIAS</p>
          <img role='img' tabIndex="0" id='img_dbox' src={require('../images/Recomendados.png')} alt='Imagen promocional experiencia DBOX Cinemark'></img>
          <div role='button' tabIndex="0" id="dbox_info" class="bg_terciario btn txt_primario">
            MÁS INFORMACIÓN
          </div>
          <img role='img' tabIndex="0" id='transformes_dbox' src={require('../images/transformersPelicula.jpg')} alt='Imagen promocional Transformes DBOX Cinemark'></img>
        </div>
      </section>

      <section class="mt-4 ms-5 pb-4" aria-label="Promociones de nuestros aliados">
        <h2>PROMOCIONES DE NUESTROS ALIADOS</h2>
        <div className='row mt-2 me-5 d-flex justify-content-around' aria-label="Imágenes de promociones">
          <div class="col-4">
            <img role='img' tabIndex="0" className='img_promocion' src={require('../images/promocion1.png')} alt='Promocion Challenge 2K y 5L Cinemark'></img>
          </div>
          <div class="col-4">
            <img role='img' tabIndex="0" className='img_promocion' src={require('../images/promocion2.png')} alt='Promoción 505 de descuento presentando tajerta Cinemark'></img>
          </div>
        </div>
      </section>

      <Footer tabIndex="11" aria-label="Pie de página" />

    </div >
  );
}

export default Home;