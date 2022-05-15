import React, { useState } from 'react'
import styles from './PrincPragas.module.css'

export const PrincPragas = () => {
    const pragas = [
        {nome: 'Urso', texto: "Descrição: Urso"},
        {nome: 'Calango', texto: "Descrição: Calango"},
        {nome: 'DIOnossauro', texto: "Descrição: DIOnossauro"},
        {nome: 'Baleia', texto: "Descrição: Baleia"},
        {nome: 'Maças', texto: "Descrição: Maças"},
        {nome: 'Abacate', texto: "Descrição: Abacate"},
    ]
    const [text, SetText] = useState()
    function GetText(id){
        SetText(pragas[id - 1].texto);
    }
  return (
    <div className={styles.PrincPraga}>
        <div className={styles.Praga}>
            <div className={styles.Caixas}>
                {pragas.map((praga, i) => (
                    <div onMouseEnter={() => GetText(i)} className={styles.PragaBox}>{praga.nome}</div>
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
