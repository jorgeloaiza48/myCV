import React from 'react'
import "./main.css"
import htmlicon from "./htmlicon.ico"
import cssicon from "./cssicon.ico"
import jsicon from "./javascript_icon.ico"
import nodejsicon from "./nodeJSicon.ico"
import pythonicon from "./pythonicon.ico"
import visualbasic from "./visual-basic.png"
import expressicon from "./expressicon.png"
import sequelize from "./sequelize.ico"
import sql from "./sqlicon.ico"
import react from "./react_icon.ico"
import bootstrap from "./bootstrap.ico"
import tailwind from "./tailwind_icon.ico"
import oracleCertification from "./oracleCertification.png"


function Main() {
  return (
    <div className='container-fluid'>
      <h2 className='mt-5'>Habilidades</h2>
      <div className="cvMain">
        <div className='d-flex justify-content-around p-3'>
          <img src={htmlicon} alt='icon' />
          <img src={cssicon} alt='icon' />
          <img src={jsicon} alt='icon' />
          <img src={nodejsicon} alt='icon' />
          <img src={pythonicon} alt='icon' />
          <img src={visualbasic} alt='icon' />
          <img src={expressicon} alt='icon' />
          <img src={sequelize} alt='icon' />
          <img src={sql} alt='icon' />
          <img src={react} alt='icon' />
          <img src={bootstrap} alt='icon' />
          <img src={tailwind} alt='icon' />
        </div>
      </div>


      <h2 className='mt-5'>Formación académica</h2>
      <section class="bsb-timeline-3 bg-light py-3 py-md-5 py-xl-8">
        <div class="">
          <div class="row justify-content-center">
            <div class="col-10 col-md-12 col-xl-10 col-xxl-9">

              <ul class="timeline">
                <li class="timeline-item left">
                  <div class="timeline-body">
                    <div class="timeline-content timeline-indicator">
                      <div class="card border-0 shadow">
                        <div class="card-body p-xl-4">
                          <h5 class="card-subtitle text-secondary mb-1">2006</h5>
                          <h2 class="card-title mb-3">Ingeniería de Sistemas y Computación</h2>
                          <p class="card-text m-0">Universidad Tecnológica de Pereira.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="timeline-item right">
                  <div class="timeline-body">
                    <div class="timeline-content timeline-indicator">
                      <div class="card border-0 shadow">
                        <div class="card-body p-xl-4">
                          <h5 class="card-subtitle text-secondary mb-1">2015</h5>
                          <h2 class="card-title mb-3">Diplomado en docencia virtual.</h2>
                          <p class="card-text m-0">Politécnico de Colombia 2015.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="timeline-item left">
                  <div class="timeline-body">
                    <div class="timeline-content timeline-indicator">
                      <div class="card border-0 shadow">
                        <div class="card-body p-xl-4">
                          <h5 class="card-subtitle text-secondary mb-1">2017</h5>
                          <h2 class="card-title mb-3">Especialización en Didáctica de la Docencia virtual.</h2>
                          <p class="card-text m-0">Fundación Universitaria del Área Andina.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="timeline-item right">
                  <div class="timeline-body">
                    <div class="timeline-content timeline-indicator">
                      <div class="card border-0 shadow">
                        <div class="card-body p-xl-4">
                          <h5 class="card-subtitle text-secondary mb-1">2020</h5>
                          <h2 class="card-title mb-3">Maestría en Ingeniería Sistemas y Computación2020</h2>
                          <p class="card-text m-0">Universidad Tecnológica de Pereira.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <h2 className='mt-5'>Certificaciones</h2>
      <div className='cvMain'>
        <img src={oracleCertification} className="mx-auto d-block img-fluid" alt=''/>
      </div>


      <h2 className='mt-5'>Experiencia laboral</h2>
      
 

<section class="bsb-timeline-1 py-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 col-md-8 col-xl-6">

        <ul class="timeline">
          <li class="timeline-item">
            <div class="timeline-body">
              <div class="timeline-content">
                <div class="card border-0">
                  <div class="card-body p-0">
                    <h5 class="card-subtitle text-secondary mb-1">2007-2008</h5>
                    <h2 class="card-title mb-3">Secretaría departamental de RISARALDA <br></br>Docente Asesor del área informática</h2>
                    <p class="card-text m-0">Tecnologías empleadas: C++, VISUALBASIC</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="timeline-item">
            <div class="timeline-body">
              <div class="timeline-content">
                <div class="card border-0">
                  <div class="card-body p-0">
                    <h5 class="card-subtitle text-secondary mb-1">2009-2024</h5>
                    <h2 class="card-title mb-3">SENA<br></br>Instructor de informática(ANÁLISIS Y DESARROLLO DE SOFTWARE, EXCEL AVANZADO, BD, ESTADÍSTICA, MATEMÁTICA, ÁLGEBRA)</h2>
                    <p class="card-text m-0">Tecnologías empleadas: PYTHON, VISUALBASIC, SQL, HTML, CSS, JavaScript, NODE JS, REACTJS, TAILWINDCSS, BOOTSTRAP</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="timeline-item">
            <div class="timeline-body">
              <div class="timeline-content">
                <div class="card border-0">
                  <div class="card-body p-0">
                    <h5 class="card-subtitle text-secondary mb-1">2022</h5>
                    <h2 class="card-title mb-3">Digital House<br></br>Desarrollador WebFullStack</h2>
                    <p class="card-text m-0">Tecnologías empleadas: HTML, CSS, JAVASCRIPT, NODEJS, REACT
                    SEQUELIZE, EXPRESS, SQL. Proyecto desarrollado: https://myecommerce.onrender.com/</p>
                  </div>
                </div>
              </div>
            </div>
          </li>          
        </ul>

      </div>
    </div>
  </div>
</section>




      <h2>Proyectos desarrollados</h2>
      <div className="cvMain">
        <ul>
          <li><p>Tienda virtual. <a href='https://myecommerce.onrender.com/'>https://myecommerce.onrender.com/</a></p></li>
          <li><p>Programador de cursos complementarios (VisualBasic).</p></li>
          <li><p>Validador de usuarios registrados en senasofiaplus.edu.co (Automatización).</p></li>
          <li><p>Registrador de usuarios en senasofiaplus.edu.co (Automatización).</p></li>
          <li><p>Programador de cursos complementarios. <a href="https://programador-cursos.onrender.com/#/">https://programador-cursos.onrender.com/#/</a></p></li>
          <li><p>Entorno prácticas concurso DIAN        <a href='https://simulacrosdian.onrender.com/'>https://simulacrosdian.onrender.com/</a></p></li>
        </ul>
      </div>
      <h2>Formación Complementaria</h2>
      <div className="cvMain">
        <h4>SENA</h4>
        <ul>
          <li>ESTRATEGIAS PARA LA ORIENTACIÓN DE PROCESOS DE FORMACIÓN EN AMBIENTES VIRTUALES DE APRENDIZAJE</li><br></br>
          <li>FUNDAMENTACIÓN DE LA FORMACIÓN PROFESIONAL INTEGRAL CON BASE EN COMPETENCIAS.</li> <br></br>
          <li>ESTRATEGIAS Y MEDIOS PARA EL APRENDIZAJE DE TECNOLOGÍAS</li><br></br>
          <li>FORMACIÓN POR PROYECTOS</li><br></br>
          <li>ESTRATEGIAS PARA LA ORIENTACIÓN DE PROCESOS DE FORMACIÓN EN AMBIENTES VIRTUALES DE APRENDIZAJE</li><br></br>
          <li>CONTROL INTERNO EN LOS SISTEMAS INFORMÁTICOS</li><br></br>
          <li>REDES Y SEGURIDAD</li><br></br>
          <li>FORMACION EN AMBIENTES VIRTUALES DE APRENDIZAJE</li><br></br>
        </ul>
        <h4>UNIVERSIDAD TECNOLÓGICA DE PEREIRA</h4>
        <ul>
          <li>GESTIÓN DE LA CALIDAD EN PROYECTOS</li><br></br>
        </ul>
        <h4>STANFORD UNIVERSITY COURSERA</h4>
        <ul>
          <li>MACHINE LEARNING</li><br></br>
        </ul>
        <h4>MICROSOFT</h4>
        <ul>
          <li>AZ-900: MICROSOFT AZURE FUNDAMENTALS</li><br></br>
        </ul>
      </div>

    </div>
  )
}

export default Main