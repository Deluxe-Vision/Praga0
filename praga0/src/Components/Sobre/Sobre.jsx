import React from 'react'
import styles from './Sobre.module.css'

const pragas = require('../../banco.json')

export const Sobre = () => {
  const id = parseInt(window.location.search.replace("?", ""));
  return (
    <div className={styles.main}>
      <div className={styles.quickView}>
        <h3>{pragas[id].nome}</h3>
        <div className={styles.imgBox}>IMAGEM</div>
        <div className={styles.princInfo}>
          <h3>Principais Doenças</h3>
          <p>{pragas[id].texto}</p>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <h3>Sobre a praga</h3>
        <p>{pragas[0].sobre}</p>

        <h3>Como previnir e como tratar:</h3>
        <p>{pragas[0].prevencao}</p>
      </div>

    </div>
  )
}
