import React, { useState } from 'react'
import styles from './PrincPragas.module.css'
const pragas = require('../../banco.json')
export const PrincPragas = () => {

  const [text, SetText] = useState()
  const GetText = id => SetText(pragas[id].texto);

  return (
    <div className={styles.PrincPraga}>
      <div className={styles.Praga}>
        <div className={styles.Caixas}>
          {pragas.map((praga, i) => (
            <div onClick={() => window.location.href = `praga?${i}`}
              onMouseEnter={() => GetText(i)} className={styles.PragaBox} > {praga.nome} </div>
          ))}
        </div>
        <div className={styles.info}>
          <h4>Riscos a Saúde</h4>
          <p>{text}</p>
        </div>
      </div>
      <div className={styles.Mapa}>
        <button>Ver mais</button>
      </div>
    </div>
  )
}
