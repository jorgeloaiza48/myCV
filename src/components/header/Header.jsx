import React from 'react'
import "./header.css"
import fotopersonal from "./fotopersonal.jpg"
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



export default function Header() {
  return (
    <div className='header'>
        <div className="headerPhoto">
          <img src={fotopersonal} alt="foto-personal" className="headerPhotoImg"/>
        </div>
        <div className="headerNombres">
          <h1>JORGE ELIÉCER LOAIZA MUÑOZ</h1>
          <p>Ingeniero de sistemas y Computación</p>
          <p>Msc. Ingeniería de sistemas y computación</p>
          <p>Desarrollador Web FullStack</p>
        </div>
        <div className="headerContacto">
          <ul className='contactList'>
              <li className='contactListItem'><p><SmartphoneIcon/></p>    <p>(+57) 3122727084</p></li>      
              <li className='contactListItem'><p><SmartphoneIcon/></p>    <p>(+57) 3162565148</p></li>           
              <li className='contactListItem'><p><LocationOnIcon/></p>    <p>Pereira / Risaralda - Colombia</p></li>
              <li className='contactListItem'><p><EmailIcon/></p> <p>jelm48@hotmail.com</p></li>  
              <li className='contactListItem'><p><AlternateEmailIcon/></p> <p>jorge.loaiza@utp.edu.co</p></li>            
          </ul>
        </div>       
    </div>
  )
}
