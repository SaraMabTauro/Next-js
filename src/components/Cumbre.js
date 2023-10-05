import React from 'react';
import styles from '../Style/cumbre.module.css';

const Cumbre = () => {
  return (
    <div className={styles.imagenFondo}>
      <div className={styles.textoSobreImagen2}>
        <p className={styles.capitalize}>Cumbre Amazoníca</p>
        <a href="#" className={styles.leerMasButton}>Leer más</a>
      </div>
    </div>
  );
};

export default Cumbre;

