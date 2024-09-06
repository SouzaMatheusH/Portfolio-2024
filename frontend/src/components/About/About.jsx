import React from 'react'
import { getImageurl } from '../../utils'

import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id='Sobre'>
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageurl("about/aboutImage.gif")} alt="" />

      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageurl("about/uiIcon.png")} alt="FrontEnd" />
          <div className={styles.aboutItemText}>
            <h3>FrontEnd</h3>
            <p>Tenho conhecimentos sólidos em HTML e CSS. Desenvolvo majoritariamente em ReactJS
               e já utilizei ferramentas como bootstrap e React Icons.</p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <img src={getImageurl("about/serverIcon.png")} alt="Server" />
          <div className={styles.aboutItemText}>
            <h3>BackEnd</h3>
            <p>Desenvolvo BackEnd em NodeJS, sabendo utilizar tanto MySQL quanto MongoDB para os bancos de dados. Tenho conhecimentos em
              Express, criação de rotas, requisições de API, CRUD, Mongoose, Sequelize, Axios, entre outras ferramentas!
            </p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <img src={getImageurl("about/cursorIcon.png")} alt="UI/UX" />
          <div className={styles.aboutItemText}>
            <h3>Tragetória</h3>
            <p>Tenho 18 anos atualmente, mas comecei aos 16 no desenvolvimento web usadno PHP. Fui aprimorando meus conhecimentos e atualmente
              estou cursando ensino superior em Análise e Desenvolvimento de Sistemas. Veja minhas habilidades gerais e meus projetos abaixo!
            </p>
          </div>
        </li>
      </ul>
      </div>
    </section>
  )
}

export default About
