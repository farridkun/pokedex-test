import React from 'react'
import styles from '@/styles/ListCardPokemon.module.css'
import { useGlobalContext } from '@/context/global'
import Router from 'next/router'
import { Loading } from './Loading'

function ListCardPokemon() {
  const { allPokemonData, loading } = useGlobalContext()

  return (
    <div className={styles.allPokemon}>
      {!loading ? (
        allPokemonData.map((pokemon) => {
          return (
            <div
              key={pokemon.id}
              className={styles.card}
              onClick={() => {
                Router.push(`/detailPokemon/${pokemon.name}`);
              }}
            >
              <div className={styles.cardImage}>
                <img
                  src={pokemon.sprites.other.home.front_shiny}
                  alt={pokemon.name}
                />
              </div>
              <div className={styles.cardBody}>
                <h3>{pokemon.name}</h3>
                <p>More Details &nbsp; &rarr;</p>
              </div>
            </div>
          );
        })
      ) : (
        <Loading count={6} height={320} width={320} />
      )}
    </div>
  )
}

export default ListCardPokemon