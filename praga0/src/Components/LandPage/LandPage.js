import React from 'react'
import styles from './LandPage.module.css'
import imgDoctor from '../../img/Doctor.svg'

export const LandPage = () => {
  return (
    <div className={styles.safeArea}>
        <img className={styles.imgDoctor} src={imgDoctor}/>
        <h1>Doença</h1>
        <h2>Como se <b>PREVINIR</b></h2>
    </div>
  )
}
