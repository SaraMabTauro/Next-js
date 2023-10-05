// EsliganSection.js
import React from 'react';
import styles from '../Style/eslogan.module.css';

const EsliganSection = () => {
  return (
    <div className={styles.wwfSection}>
      <img src="//cdnassets.panda.org/_skins/international/img/logo.png" alt="Panda de WWF" />
      <p className={styles.eslogan}>
        Por un futuro en el que los humanos vivan en armonía con la naturaleza.
      </p>
    </div>
  );
};

export default EsliganSection;
