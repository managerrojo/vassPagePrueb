import React from 'react';
import Image from 'next/image';
import logoVass from '../../public/images/logoVass.png';
import simmbol from '../../public/images/menuimg.png';


const Menu = () => {
    return (
        <section className='Menu'>
            <div className='columna1'>
                <div className='title-menu'>
                    <h2>Complex made simple</h2>
                </div>
                {/* <Image src={logoVass} alt="Logo" style={{ width: "60", height: "auto" }} /> */}
            </div>
            <div className='grupoCol' >
                <div className='columna2'>
                    <h2>Sitemap VASS</h2>
                    <li>
                        <ul>Home</ul>
                        <ul>Casos de exito</ul>
                        <ul>Somos Vass</ul>
                        <ul>Impactos</ul>
                        <ul>metodo</ul>
                        <ul>Tecnologias</ul>
                        <ul>Proyectos I=D+i</ul>
                        <ul>Insights</ul>
                        <ul>Noticias</ul>
                        <ul>VASS Research</ul>
                        <ul>Canal de Denuncias</ul>
                        <ul>Contacto</ul>
                    </li>
                </div>
                <div className='columna3'>
                    <h2>Sitemap Talento</h2>
                    <li>
                        <ul>Talento</ul>
                        <ul>#LifeVASS</ul>
                        <ul>Beneficios</ul>
                        <ul>Planes para ti</ul>
                        <ul>Proyectos </ul>
                        <ul>Smartworking</ul>
                        <ul>Ofertas</ul>
                    </li>
                </div>
            </div>
            <div className='columna4'>
                <h2>Empresas</h2>
                <li>
                    <ul>VASS</ul>
                    <ul>Nateevo</ul>
                    <ul>Servatic</ul>
                    <ul>vdSHOP</ul>
                </li>

                <Image src={simmbol} alt="Logo" style={{ width: "80px", height: "auto" }} />

            </div>


        </section>
    );
}

export default Menu;
