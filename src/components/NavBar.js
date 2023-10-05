import Link from "next/link";
import styles from "../Style/navbar.module.css";
import { FaArrowDown } from 'react-icons/fa';

const Navbar = () => {
  const isActive = true;
  return (
    <nav className={styles.header}>
      <img className={styles.logo} src="//cdnassets.panda.org/_skins/international/img/logo.png" alt="Panda" />
      <ul>
        <li className={`${styles.hasDropdown} ${isActive ? styles.active : ''}`}>
          <Link href="#" className={styles.bodyStyles}>SOBRE WWF
          <FaArrowDown  className={styles.arrowIcon} />
          </Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/pages/panda">Qué es WWF</Link>
            </li>
            <li>
              <Link href="#">Nuestra historia</Link>
            </li>
            <li>
              <Link href="#">Misión</Link>
            </li>
            <li>
              <Link href="#">Objetivos globales</Link>
            </li>
            <li>
              <Link href="#">Contacto y oficinas</Link>
            </li>
            <li>
              <Link href="#">Declaración de principios y salvaguarada de WWF</Link>
            </li>
          </ul>
        </li>


        <li className={`${styles.hasDropdown} ${isActive ? styles.active : ''}`}>
          <Link href="#" className={styles.bodyStyles}>QUÉ HACEMOS
          <FaArrowDown  className={styles.arrowIcon} /></Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="#">Clima y Energía</Link>
            </li>
            <li>
              <Link href="#">Bosques</Link>
            </li>
            <li>
              <Link href="#">Alimentos</Link>
            </li>
            <li>
              <Link href="#">Agua dulce</Link>
            </li>
            <li>
              <Link href="#">Gobernanza</Link>
            </li>
            <li>
              <Link href="#">Océanos</Link>
            </li>
            <li>
              <Link href="#">Vida Silvestre</Link>
            </li>
            <li>
              <Link href="#">Finanzas</Link>
            </li>
            <li>
              <Link href="#">Mercados</Link>
            </li>
            <li>
              <Link href="#">Nuevo Acuerdo por la Naturaleza y las Personas</Link>
            </li>
          </ul>
        </li>

        <li className={`${styles.hasDropdown} ${isActive ? styles.active : ''}`}>
          <Link href="#" className={styles.bodyStyles}>¿DÓNDE TRABAJAMOS?
          <FaArrowDown  className={styles.arrowIcon} /></Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="#">WWF en el mundo</Link>
            </li>
            <li>
              <Link href="#">Amazonía</Link>
            </li>
          </ul>
        </li>
        
        <li className={`${styles.hasDropdown} ${isActive ? styles.active : ''}`}>
          <Link href="#" className={styles.bodyStyles}>PUEDES AYUDAR
          <FaArrowDown  className={styles.arrowIcon} />
          </Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="#">Actúa hoy</Link>
            </li>
          </ul>
        </li>

        <li className={`${styles.hasDropdown} ${isActive ? styles.active : ''}`}>
          <Link href="#" className={styles.bodyStyles}>NOTICIAS Y PUBLICACIONES
          <FaArrowDown  className={styles.arrowIcon} /></Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="#">Noticias</Link>
            </li>
            <li>
              <Link href="#">Publicaciones</Link>
            </li>
          </ul>
        </li>

        <li className={`${styles.hasDropdown} ${isActive ? styles.active : ''}`}>
          <Link href="#" className={styles.bodyStyles}>QUÉ HACEMOS
          <FaArrowDown  className={styles.arrowIcon} /></Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="#">La Hora del Planeta 2023</Link>
            </li>
            <li>
              <Link href="#">Desafío de Ciudades</Link>
            </li>
            <li>
              <Link href="#">Aniversario 60 WWF</Link>
            </li>
            <li>
              <Link href="#">CITES en la COP19</Link>
            </li>
            <li>
              <Link href="#">COP 27 Egipto</Link>
            </li>
            <li>
              <Link href="#">COP15</Link>
            </li>
            <li>
              <Link href="#">COP 28</Link>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;

/*
import React from 'react';
import Link from 'next/link';
import styles from '../Style/pruebas.module.css'; // Assuming your folder is named 'styles'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src="//cdnassets.panda.org/_skins/international/img/logo.png" alt="Panda" />
      <ul>
        <li className={styles.hasDropdown}>
          <a href="#">SOBRE WWF</a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/pages/WWFQuee">Qué es WWF</Link>
            </li>
            <li>
              <Link href="#">Nuestra historia</Link>
            </li>
            <li>
              <Link href="#">Misión</Link>
            </li>
          </ul>
        </li>
        <li className={styles.hasDropdown}>
          <a href="#">QUÉ HACEMOS</a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="#">Clima y Energía</Link>
            </li>
            <li>
              <Link href="#">Bosques</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import Link from 'next/link';
import styles from '../Style/pruebas.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src="//cdnassets.panda.org/_skins/international/img/logo.png" alt="Panda" />
      <ul>
        <li className={styles.hasDropdown}>
          <a href="#">SOBRE WWF</a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/pages/WWFQuee">Qué es WWF</Link>
            </li>
            <li>
              <Link href="#">Nuestra historia</Link>
            </li>
            <li>
              <Link href="#">Misión</Link>
            </li>
          </ul>
        </li>
        <li className={styles.hasDropdown}>
          <a href="#">QUÉ HACEMOS</a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="#">Clima y Energía</Link>
            </li>
            <li>
              <Link href="#">Bosques</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;*/

