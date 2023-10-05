
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../Style/new.module.css';

const NewsSection = () => {
  return (
    <div>
      <div>
        <h2 className={styles.textoGenerales}>NOTICIAS</h2>
      </div>
    <section className={styles['newSection']}>
      <article className={styles.card}>
        <img src="//wwfint.awsassets.panda.org/img/_ww195444_776714.jpg" alt="News Image 1" />
        <div className={styles.cardContent}>
          <p>
            <i className={styles.customFont}>
              <span>Posted on </span>
              <span className={styles.textPrimary}>07 sept 2023</span>
            </i>
          </p>
          <br />
          <h2 className={styles.titulo1}>WWF celebra acuerdo entre Gobiernos de Estados Unidos y Perú para el canje de deuda por alrededor de US$ 20 millones a favor de la conservación de la Amazonía peruana</h2>
          <p className={styles.titulo2}>El acuerdo es el vigésimo segundo dentro de la Ley de Conservación de Bosques Tropicales y Arrecifes de Coral (TFCCA).</p>
          <br />
          <div className={styles.arrowButtonContainer}>
            <a href="#" className={styles.arrowButton}>
            <FaArrowRight />
            </a>
          </div>
        </div>
      </article>

      <article className={styles.card}>
        <img src="//wwfint.awsassets.panda.org/img/_ww1300585_776665.jpg" alt="News Image 2" />
        <div className={styles.cardContent}>
          <p>
            <i className={styles.customFont}>
              <span>Posted on </span>
              <span className={styles.textPrimary}>04 sept 2023</span>
            </i>
          </p>
          <br />
          <h2 className={styles.titulo1}>Decisión de Islandia de reanudar caza comercial de ballenas es un retroceso para los esfuerzos mundiales de conservación</h2>
          <br />
          <div className={styles.arrowButtonContainer}>
            <a href="#" className={styles.arrowButton}>
            <FaArrowRight />
            </a>
          </div>
        </div>
      </article>

      <article className={styles.card}>
        <img src="//wwfint.awsassets.panda.org/img/original_ww1134583_1_776265.jpg" alt="News Image 2" />
        <div className={styles.cardContent}>
          <p>
            <i className={styles.customFont}>
              <span>Posted on </span>
              <span className={styles.textPrimary}>09 ago 2023</span>
            </i>
          </p>
          <br />
          <h2 className={styles.titulo1}>Gobiernos reconocen la urgencia de evitar el punto de no retorno en la Amazonía</h2>
          <p className={styles.titulo2}>A pesar de los avances durante la Cumbre Amazónica, WWF manifiesta una gran preocupación ante la falta de una meta para acabar con la deforestación en la región</p>
          <br />
          <div className={styles.arrowButtonContainer}>
            <a href="#" className={styles.arrowButton}>
            <FaArrowRight />
            </a>
          </div>
        </div>
      </article>

      <div className={styles.botonesOs}>
        <a href="#" className={styles.notPu}>NOTICIAS</a>
        <a href="#" className={styles.notPu}>PUBLICACIONES</a>
      </div>
      
    </section>
  </div>
  );
};

export default NewsSection;

