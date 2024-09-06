import React from 'react'
import { useState } from 'react'

import styles from './NavBar.module.css'
import { getImageurl } from '../../utils'



const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfólio</a>
      <div className={styles.menu}>
        <img 
        className={styles.menuBtn} 
        src={
          menuOpen
            ? getImageurl("nav/closeIcon.png")
            : getImageurl("nav/menuIcon.png")
          }
          alt="menu-button" 
          onClick={() => setMenuOpen(!menuOpen)}
          />
        <ul className={`${styles.menuitems} : ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#Sobre">Sobre</a>
          </li>
          <li>
            <a href="#Experiencia">Experiência</a>
          </li>
          <li>
            <a href="#Projetos">Projetos</a>
          </li>
          <li>
            <a href="#Contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
