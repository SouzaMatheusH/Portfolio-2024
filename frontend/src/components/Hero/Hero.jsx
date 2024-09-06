import React from 'react'
import { getImageurl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, eu sou o Matheus Souza!</h1>
        <p className={styles.description}>
          Sou desenvolvedor FullStack em ReactJS e NodeJS. Estou cursando ensino superior em Análise e Desenvolvimento de Sistemas
           no segundo semestre, mas já faço sites há dois anos!
        </p>
      
      <a className={styles.contact} href="mailto.matheussouzahs@gmail.com">Entre em contato</a>
      </div>
      <img className={styles.heroImg} src={getImageurl("hero/heroImage.png")} alt="Foto pessoal" />
    
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
