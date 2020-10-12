import React, { Component } from 'react'
import './stilospdf.css'
import firebase from '../../Firebase'
import logo from './icons/logo.png'
import logo2 from './icons/logo chiquito.png'
import iconfe from './icons/iconfe.png'
import iconhora from './icons/iconhora.png'
import iconubi from './icons/iconubi.png'
import iconmano from './icons/iconmano.png'
import presentacion from './icons/presentacion .png'

export default class Agendasemanal extends Component{
  render(){
    return(
      <div className='fader'>
      <a href='documentos/Agendapdf.js' download="Reporte2020">
    Descargar Archivo
      </a>
      <div>
          <div className='prueba'>
            <div className='portada'>
            <div>
                <p className='txt-age-1'>ACTIVIDADES</p>
            </div>
                <div class='linea'>  </div>
            <div>
                <h2 className='txt-res'>RELEVANTES</h2>
                <p className='txt-fe'>Enero 13 2019</p>
            </div>
            </div>


            <div className='prueba2'>
              <img className='img-azul' src={presentacion} alt=''/>
                </div>
                </div>

                <div  className='sigui-pa'>
                  <div className='esp-pro'>
                  <div className='centro-mano'>

                  </div></div>
                  <div className='datos-esp-pro'>
                  <div className='datos-pro' >
                  <p className='text-arro'>Raúl ARROYO</p>
                  <p className='text-pro'>Procurador General</p>
                    <div className='linea-pro'></div>

                  </div>
                  <div  className='datos-pro-fe' ></div>
                  <div className='conju-pro'>

                  <div className='icons1'>
                        <div className='icons-pos'>
                        <img className='icons' src={iconfe} alt='' />
                        <p className='icons-txt'>Enero 8</p>
                        </div>
                  </div>
                  <div className='icons'>
                        <div className='icons-pos'>
                        <img className='icons' src={iconhora} alt='' />
                        <p className='icons-txt'>12-15hr</p>
                        </div>
                  </div>
                  <div className='icons'>
                        <div  className='icons-pos'>
                        <img className='icons' src={iconubi} alt='' />
                        <p className='icons-txt'>Tula de Allende, Hgo.</p>
                        </div>
                  </div>

                  </div>
                  <div  className='datos-pro-text' >
                  <p className='tipo-text'>Reunión en Tula en pregira con Jorge Arzubide de ProJusticia y Rebeca Fernández Calleja del Instituto de Resultados Rápidos, para afinar detalles del “Reto de los 100 días”.</p>
                  </div>
                  <div className="mano">
                    <div>
                      <img className='iconmano'src={iconmano} alt=''/> </div>
                    <div>
                    <p className='txt-mano'>Conformar las condiciones para reducir la incidencia delictiva en el municipio de Tula de Allende</p>
                    </div>
                  </div>

                  </div>

                </div>

                <div  className='sigui-pa'>

                  <div className='datos-esp-pro'>
                  <div className='datos-pro' >
                  <p className='text-arro'>Anette Rodríguez Fernández</p>
                  <p className='text-pro'>Subprocuradora de Procedimientos Penales Región Poniente</p>

                  </div>
                  <div>
                  <div  className='datos-pro-fe' ></div>

                  </div>
                  <div className='conju-pro'>

                  <div className='icons1'>
                        <div className='icons-pos'>
                        <img className='icons' src={iconfe} alt='' />
                        <p className='icons-txt'>Enero 8</p>
                        </div>
                  </div>
                  <div className='icons'>
                        <div className='icons-pos'>
                        <img className='icons' src={iconhora} alt='' />
                        <p className='icons-txt'>12-15hr</p>
                        </div>
                  </div>
                  <div className='icons'>
                        <div  className='icons-pos'>
                        <img className='icons' src={iconubi} alt='' />
                        <p className='icons-txt'>Tula de Allende, Hgo.</p>
                        </div>
                  </div>

                  </div>
                  <div  className='datos-pro-text' >
                  <p className='tipo-text'>Reunión de Coordinación para capacitación en el marco del Registro Nacional de Detenciones.</p>
                  </div>


                  </div>


                </div>
                  <div className='esp-pro'>

                  </div>
           </div>


    </div>






    )

  }
}
