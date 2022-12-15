import React from 'react'
import styles from  './card.module.css'
import Certificados from "../../../public/assets/images/empresa/Certificados.webp";

export const Card = () => {
  return (
    <>
        <article className={`${styles.card} ${styles.card__1}`}>
            <div className={`${styles.card__info} ${styles.hover}`}>
                <div className={`${styles.card__clock} ${styles.info}`}>
                </div>
            </div>
            <div className={`${styles.card__img}`}></div>
            
            <a href="#" className={`${styles.card_link}`}>
                <div className={`${styles.card__img__hover} `}></div>
            </a>
            <div className={`${styles.card__info}`}>
                <span className={`${styles.card__category} font-playfair`}> Responsabilidad Social</span>
                <h3 className={`${styles.card__title} font-mulish`}>Estamos comprometidos con nuestro entorno y con el medio ambiente. Cuidamos el planeta para dejar un lugar mejor.</h3>
            </div>
        </article>     
    </>
  )
}
