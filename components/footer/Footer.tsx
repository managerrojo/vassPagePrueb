import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <p>Copyright © 2021 Todos los derechos reservados</p>
      <div className='box-text-memory'>
        <div>
          <p >Memoria ambiental </p> 
        </div>
        <div className='box-text-polity'>
          <p>Política de cookies</p>
        </div>
      </div>
      <p> Politica de privacidad </p>
      <p> Politica de calidad y medio ambiente</p><br /> <br />
      <div className="social-icons"> 
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
        <a href="https://www.youtube.com"><FaYoutube /></a>

      </div>
    </footer>
  );
}

export default Footer;


