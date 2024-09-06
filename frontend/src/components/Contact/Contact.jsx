import React from 'react'
import { getImageurl } from '../../utils'

import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id='Contato' className={styles.container}>
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>De uma olhada!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageurl("contact/emailIcon.png")} alt="Email" />
          <a target='blank' href="mailto:matheussouzahs@gmail.com">matheussouzahs@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageurl("contact/linkedinIcon.png")} alt="Linkedin" />
          <a target='blank' href="https://www.linkedin.com/in/matheus-souza-2a2198263/">Meu Linkedin</a>
        </li>

        <li className={styles.link}>
          <img src={getImageurl("contact/githubIcon.png")} alt="Git Hub" />
          <a target='blank' href="https://github.com/SouzaMatheusH">GitHub</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
