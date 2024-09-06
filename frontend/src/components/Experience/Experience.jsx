import React from 'react'

import skills from '../../data/skill.json'
import historyItem from '../../data/history.json'
import { getImageurl } from '../../utils'

import styles from './Experience.module.css'

const Experience = () => {
  return (
    <section className={styles.container} id='Experiencia'>
      <h2 className={styles.title}>Experiência</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {
            skills.map((skill, id) => {
              return <div key={id}  className={styles.skill}>
                <div>
                  <img className={styles.skillImageContainer} src={getImageurl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            })
          }
        </div>
        <ul className={styles.history}>
          {
            historyItem.map((historyItem, id) => {
              return <li className={styles.historyItem} key={id}>
                <img src={getImageurl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {
                      historyItem.experiences.map((experience, id) => {
                        return <li key={id}>
                          {experience}
                        </li>
                      })
                    }
                  </ul>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Experience
