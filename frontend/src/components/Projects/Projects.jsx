import React from 'react'

import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'

import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.container} id='Projetos'>
      <h2 className={styles.title}>Meus Projetos</h2>
      <div className={styles.projects}>
        {
          projects.map((project, id) => {
            return(
              <ProjectCard key={id} project={project}/>
          )})}
      </div>
    </section>
  )
}

export default Projects
