import React from 'react';
import styles from '../src/Style/navbar.module.css';  // Asegúrate de importar tus estilos correctamente
import Footer from '../src/components/Footer';


const TuComponente = () => {
  return (
    <>
    <div className={styles.contenedor}>
      <img src="//wwfint.awsassets.panda.org/img/original/osoweb_01.png" alt="Descripción de la imagen" className={styles.imagen} />
      <div className={styles['texto-sobre-imagen']}>
        <div className={styles['title-underline']}>
          QUÉ ES WWF
        </div>
      </div>
      <div className={styles.principios}>
        <p>Principios rectores de WWF</p>
        <ul>
          <li>Ser una organización global, independiente, multicultural y apolítica.</li>
          <li>Utilizar la mejor información científica disponible para abordar los temas y evaluar con actitud crítica todas sus iniciativas.</li>
          <li>Buscar el diálogo y evitar conflictos innecesarios.</li>
          <li>Ofrecer soluciones concretas de conservación a través de la combinación de proyectos de campo, iniciativas políticas, capacitación y tareas de educación.</li>
          <li>Involucrar a las comunidades locales y los pueblos indígenas en la planificación y ejecución de sus programas de campo, respetando sus necesidades culturales y económicas.</li>
          <li>Esforzarse en establecer alianzas con otras organizaciones, gobiernos, empresas y comunidades locales para mejorar la eficacia de WWF.</li>
          <li>Desarrollar sus actividades de forma rentable y aplicar los fondos de sus donantes con la máxima responsabilidad de gestión.</li>
        </ul>
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
};

export default TuComponente;

