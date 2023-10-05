// Footer.js

import React from 'react';
import styles from '../Style/navbar.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles['footer-bottom']}>
          <ul className={`${styles.textCenter}`}>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Compartiendo Contenido</a></li>
            <li><a href="#">Contactos globales</a></li>
          </ul>
        </div>
      </footer>

      <footer className={styles.footer}>
        <div className={styles['footer-bottom']}>
          <p>Fotos y gráficos © WWF o utilizados con permiso.</p>
          <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.es" target="_blank">Licencia de Creative Commons</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

