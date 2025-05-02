import React from 'react'
import "./footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';




export default function Footer() {
  return (
    <div class="container my-5">

      <footer class="text-center text-lg-start">
        <div class="container d-flex justify-content-center py-5">
          <a href="https://www.facebook.com/jeloaiza2/">
          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
            <FacebookIcon />
          </button>
          </a>
          <a href='https://github.com/jorgeloaiza48'>
          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
            <GitHubIcon />
          </button>
          </a>
          <a href='https://www.linkedin.com/in/jelm48/'>
          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
            <LinkedInIcon />
          </button>
          </a>
        </div>


        <div class="text-center text-white p-3 bg-info">
          © 2024
          <p>jorge.loaiza@utp.edu.co</p>
        </div>

      </footer>

    </div>

  )
}
