import React from 'react'
import styles from '@/styles/ListCardPokemon.module.css'

function ListCardPokemon() {
  return (
    <div className={styles.allPokemon}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          {/* img call api pokemon */}
          <img />
        </div>
        <div className={styles.cardBody}>
          {/* title */}
          <h3>Pokemon</h3>
          {/* next details */}
          <p>More Details &nbsp; &rarr;</p>
        </div>
      </div>
    </div>
  )
}

export default ListCardPokemon