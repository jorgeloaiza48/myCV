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
      <hr className='custom'></hr>
      <h2 className='mt-5'>Habilidades</h2>
      <div className="cvMain">
        <div className='d-flex justify-content-around p-3 flex-wrap'>
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

      <hr className='custom'></hr>
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
      <hr className='custom'></hr>

      <h2 className='mt-5'>Certificaciones</h2>
      <div className='cvMain'>
        <img src={oracleCertification} className="mx-auto d-block img-fluid" alt='' />
      </div>


      <hr className='custom'></hr>
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



      <hr className='custom'></hr>
      <h2 className='mt-4 mb-4'>Proyectos desarrollados</h2>
      {/* https://bestjquery.com/tutorial/timeline/demo175/ */}
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-timeline">
              <div class="timeline">
                <div class="timeline-content">
                  <div class="timeline-year">2020</div>
                  <h3 class="title">Tienda virtual</h3>
                  <p class="description">Este proyecto consiste en una tienda virtual para la venta de calzado.<br></br><strong>Tecnologías empleadas: JavaScript, EJS, CSS, HTML</strong></p>
                  <a href='https://myecommerce.onrender.com/'>https://myecommerce.onrender.com/</a>
                </div>
              </div>
              <div class="timeline">
                <div class="timeline-content">
                  <div class="timeline-year">2021</div>
                  <h3 class="title">Programador de cursos complementarios.</h3>
                  <p class="description">
                    Este proyecto realizado en Excel mediante VBA permite realizar la programación de cursos o llevar un control calendario de los mismos.<br></br><strong>Tecnologías empleadas: VisualBasic for Applications</strong>
                  </p>
                </div>
              </div>
              <div class="timeline">
                <div class="timeline-content">
                  <div class="timeline-year">2021</div>
                  <h3 class="title">Validador de usuarios registrados en senasofiaplus.edu.co (Automatización).</h3>
                  <p class="description">
                    Este proyecto consiste en pasar una serie de datos en una hoja de cálculo a una librería denominada Selenium para que esta llene por sí misma los campos de un formulario.<br></br><strong>Tecnologías empleadas: Python</strong>
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline-content">
                  <div class="timeline-year">2022</div>
                  <h3 class="title">Registrador de usuarios en senasofiaplus.edu.co (Automatización).</h3>
                  <p class="description">
                    Este proyecto consiste en pasar una serie de datos en una hoja de cálculo a una librería denominada Selenium para que esta llene por
                    sí misma los campos de un formulario y así registrar a los usuarios. Después del proceso genera un reporte en Excel para ver los resultados del proceso<br></br><strong>Tecnologías empleadas: Python</strong>
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline-content">
                  <div class="timeline-year">2022</div>
                  <h3 class="title">Programador de cursos complementarios.</h3>
                  <p class="description">Este proyecto es similar al desarrollado en excel pero esta vez empleando tecnologías Web. <br></br><strong>Tecnologías empleadas: JavaScript, CSS, HTML, REACTJS</strong>
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline-content">
                  <div class="timeline-year">2023</div>
                  <h3 class="title">Entorno prácticas concurso DIAN </h3>
                  <p class="description">Este proyecto consiste en un simulador de preguntas para practicar para las pruebas escritas de los procesos meritocráticos realizados por la CNSC.<br></br><strong>Tecnologías empleadas: JavaScript, CSS, HTML, REACTJS</strong>
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline-content">
                  <div class="timeline-year">2024</div>
                  <h3 class="title">Enron Email Data Set</h3>
                  <p class="description">Este proyecto consiste en visualizar de forma dinámica cada uno de los correos enviados y recibidos por parte de la empresa Enron.<br></br><strong>Tecnologías empleadas: Golang, HTML</strong>
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline-content">
                  <div class="timeline-year">2024</div>
                  <h3 class="title">Tienda virtual para la venta de libros</h3>
                  <p class="description">Este proyecto consiste en un e-comerce para la comercialización de libros.<br></br><strong>Tecnologías empleadas: REACTJS,HTML,CSS, JavaScript</strong>
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <hr className='custom'></hr>

      <h2>Formación Complementaria</h2>
      <div class="container bootstrap snippets bootdeys">
        <div class="row">
          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                <div class="content">
                  <h4 class="title">Servicio Nacional de Aprendizaje SENA</h4>
                  <p class="description">ESTRATEGIAS PARA LA ORIENTACIÓN DE PROCESOS DE FORMACIÓN EN AMBIENTES VIRTUALES DE APRENDIZAJE</p>
                </div>
              </div> {/* <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="green" data-radius="none">
                <div class="content">
                  <h4 class="title">Servicio Nacional de Aprendizaje SENA</h4>
                  <p class="description">FUNDAMENTACIÓN DE LA FORMACIÓN PROFESIONAL INTEGRAL CON BASE EN COMPETENCIAS.</p>
                </div>
              </div> {/* <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                <div class="content">
                  <h4 class="title">Servicio Nacional de Aprendizaje SENA</h4>
                  <p class="description">ASESORÍA PARA EL APRENDIZAJE DE PROCESOS TECNOLÓGICOS.</p>
                </div>
              </div> {/* <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                <div class="content">
                  <h4 class="title">Servicio Nacional de Aprendizaje SENA</h4>
                  <p class="description">ESTRATEGIAS Y MEDIOS PARA EL APRENDIZAJE DE TECNOLOGÍAS.</p>
                </div>
              </div> {/* <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                <div class="content">
                  <h4 class="title">Servicio Nacional de Aprendizaje SENA</h4>
                  <p class="description">FORMACIÓN POR PROYECTOS.</p>
                </div>
              </div> {/* <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                <div class="content">
                  <h4 class="title">Servicio Nacional de Aprendizaje SENA</h4>
                  <p class="description">CONTROL INTERNO EN LOS SISTEMAS INFORMÁTICOS</p>
                </div>
              </div>{/*  <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="green" data-radius="none">
                <div class="content">
                  <h4 class="title">Universidad Tecnológica de Pereira</h4>
                  <p class="description">GESTIÓN DE LA CALIDAD EN PROYECTOS</p>
                </div>
              </div>{/*  <!-- end card --> */}
            </div>
          </div>


          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                <div class="content">
                  <h4 class="title">Stanford University Coursera</h4>
                  <p class="description">MACHINE LEARNING</p>
                </div>
              </div>{/*  <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                <div class="content">
                  <h4 class="title">University of Michigan – Coursera</h4>
                  <p class="description">Applied Data Science with Python</p>
                </div>
              </div>{/*  <!-- end card --> */}
            </div>
          </div>


          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                <div class="content">
                  <h4 class="title">Coursera Project Network</h4>
                  <ul>
                    <li class="description">COVID19 Data Analysis Using Python</li>
                    <li class="description">Data Visualization with Plotly Express</li>
                    <li class="description">Data visualization with python</li>
                    <li class="description">Plots (Graphics) for Data Science</li>
                    <li class="description">Processing Data with python</li>
                  </ul>
                </div>
              </div>{/*  <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                <div class="content">
                  <h4 class="title">Intelligent Training</h4>
                  <p class="description">Microsoft Azure Fundamentals AZ-900</p>
                </div>
              </div>{/*  <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                <div class="content">
                  <h4 class="title">Google Coursera</h4>
                  <p class="description">Seguridad informática: defensa contra las artes
                    oscuras digitales</p>
                </div>
              </div>{/*  <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="green" data-radius="none">
                <div class="content">
                  <h4 class="title">Universidad Nacional Autónoma de México (Coursera)</h4>
                  <p class="description">Pensamiento Científico</p>
                </div>
              </div>{/*  <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                <div class="content">
                  <h4 class="title">Rice University (Coursera)</h4>
                  <p class="description">Python Data Visualization</p>
                </div>
              </div>{/*  <!-- end card --> */}
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
              <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                <div class="content">
                  <h4 class="title">University of California, Irvine (Coursera)</h4>
                  <p class="description">Foundations of Virtual Instruction</p>
                </div>
              </div>{/*  <!-- end card --> */}
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Main