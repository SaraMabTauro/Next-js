import React, { useState } from 'react';
import styles from '../Style/Nuevo.module.css';
  
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <nav className={styles.header}>
        <img className={styles.logo} src="//cdnassets.panda.org/_skins/international/img/logo.png" alt="panda" />
        <div className={menuOpen ? `${styles.menu} ${styles.menuOpen}` : styles.menu}>
          <ul>
            <li className={styles.hasDropdown}>
              <a href="#">SOBRE WWF</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="/pages/WWFQuee.html">Qué es WWF</a></li>
                <li><a href="#">Nuestra historia</a></li>
                {/* Agrega más elementos del menú dentro de los <ul> y <li> según sea necesario */}
              </ul>
            </li>
            {/* Agrega más elementos del menú dentro de <ul> y <li> según sea necesario */}
          </ul>
        </div>
        <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    );
  };
  
export default Nav;
  
