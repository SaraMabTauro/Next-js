// WorkSection.js
import React from "react";
import styles from "../Style/Trabajo.module.css";

const WorkSection = () => {
  return (
    <div>
      <div>
        <h2 className={styles.textoGenerales}>Nuestro trabajo</h2>
      </div>
      <div className={styles.workSection}>
        <div className={styles.workItem}>
          <img
            className={`${styles.imgResponsive} ${styles.imgFullWidth}`}
            src="//wwfint.awsassets.panda.org/img/aspect_ratio_2_750233.jpg"
            alt="WWF"
          />
          <div className={styles.caption}>
            <p
              className={`${styles.textWhite} ${styles.textCenter} ${styles.font30} ${styles.title} ${styles.textUppercase}`}
            >
              WWF EN EL MUNDO
            </p>
          </div>
        </div>

        <div className={styles.workItem}>
          <img
            className={`${styles.imgResponsive} ${styles.imgFullWidth}`}
            src="//wwfint.awsassets.panda.org/img/wind_6_668553.jpg"
            alt="Otra Imagen"
          />
          <div className={styles.caption}>
            <p
              className={`${styles.textWhite} ${styles.textCenter} ${styles.font30} ${styles.title} ${styles.textUppercase}`}
            >
              CAMBIO CLIMÁTICO
            </p>
          </div>
        </div>

        <div className={styles.workItem}>
          <img
            className={`${styles.imgResponsive} ${styles.imgFullWidth}`}
            src="//wwfint.awsassets.panda.org/img/web_279100_1_668948.jpg"
            alt="Otra Imagen"
          />
          <div className={styles.caption}>
            <p
              className={`${styles.textWhite} ${styles.textCenter} ${styles.font30} ${styles.title} ${styles.textUppercase}`}
            >
              VIDA SILVESTRE
            </p>
          </div>
        </div>

        <div className={styles.workItem}>
          <img
            className={`${styles.imgResponsive} ${styles.imgFullWidth}`}
            src="//wwfint.awsassets.panda.org/img/wwfbolivia_waterfall_altamachi_668949.jpg"
            alt="Otra Imagen"
          />
          <div className={styles.caption}>
            <p
              className={`${styles.textWhite} ${styles.textCenter} ${styles.font30} ${styles.title} ${styles.textUppercase}`}
            >
              SITIOS PRIORITARIOS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
