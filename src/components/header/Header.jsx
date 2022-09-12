import React from 'react'
import "./header.css"
import fotopersonal from "./fotopersonal.jpg"
import {Smartphone,LocationOn,EmailOutlined} from '@material-ui/icons';



export default function Header() {
  return (
    <div className='header'>
        <div className="headerPhoto">
          <img src={fotopersonal} alt="foto-personal" className={"headerPhotoImg"}/>
        </div>
        <div className="headerNombres">
          <h1>JORGE ELIÉCER LOAIZA MUÑOZ hgfhfghfg</h1>
          <p>Ingeniero de sistemas y Computación</p>
          <p>Msc. Ingeniería de sistemas y computación</p>
          <p>Desarrollador Web FullStack</p>
        </div>
        <div className="headerContacto">
          <ul className='contactList'>
              <li className='contactListItem'><p><Smartphone/></p>    <p>3122727084</p></li>           
              <li className='contactListItem'><p><LocationOn/></p>    <p>Pereira / Risaralda</p></li>
              <li className='contactListItem'><p><EmailOutlined/></p> <p>jelm48@misena.edu.co</p></li>              
          </ul>
        </div>       
    </div>
  )
}
