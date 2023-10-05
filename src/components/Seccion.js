
import React from 'react';
import styles from '../Style/seccion.module.css';

const Seccion = () => {
  return (
    <div className={styles.container2}>

      <div className={styles.section}>
        <p className={styles.capitalized}>Sobre wwf</p>
        <ul>
          <li className={styles.grayText}>Qué es WWF</li>
          <li className={styles.grayText}>Nuestra historia</li>
          <li className={styles.grayText}>Misión</li>
          <li className={styles.grayText}>Objetivos globales</li>
          <li className={styles.grayText}>Contacto y oficinas</li>
          <li className={styles.grayText}>Declaración de principios y salvaguardas de WWF</li>
        </ul>
      </div>

      <div className={styles.section}>
      <p className={styles.capitalized}>Que hacemos</p>
        <ul>
          <li className={styles.grayText}>Clima y Energía</li>
        </ul>
      </div>

      <div className={styles.section}>
      <p className={styles.capitalized}>Donde Trabajamos</p>
        <ul>
          <li className={styles.grayText}>WWF en el mundo</li>
          <li className={styles.grayText}>Amazonía</li>
        </ul>
      </div>

      <div className={styles.section}>
      <p className={styles.capitalized}>Puedes ayudar</p>
        <ul>
          <li className={styles.grayText}>Actúa hoy</li>
        </ul>
      </div>

      <div className={styles.section}>
      <p className={styles.capitalized}>Noticias y Publicaciones</p>
        <ul>
          <li className={styles.grayText}>Noticias</li>
          <li className={styles.grayText}>Publicaciones</li>
        </ul>
      </div>

      <div className={styles.section}>
      <p className={styles.capitalized}>Campañas</p>
        <ul>
          <li className={styles.grayText}>La Hora del Planeta 2023</li>
        </ul>
      </div>
    </div>
  );
};

export default Seccion;
