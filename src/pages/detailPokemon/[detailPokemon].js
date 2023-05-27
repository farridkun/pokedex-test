import React, { useEffect } from "react";
import styles from "@/styles/DetailPokemon.module.css";
import { useGlobalContext } from "@/context/global";
import { randomColor } from "@/utils/Helpers";
import { pokemonColors } from "@/utils/Constant";
import { useRouter } from "next/router";

function DetailPokemon() {
  const router = useRouter()

  const { detailPokemon } = router.query

  const {
    getPokemon,
    loading,
    pokemon: pokemonItem
  } = useGlobalContext()

  useEffect(() => {
    if (detailPokemon) {
      getPokemon(detailPokemon)
    }
  }, [detailPokemon])
  
  return (
    <div
      className={styles.PokemonBg}
      style={{
        background: !loading && randomColor(pokemonColors),
      }}
    >
      {!loading ? (
        pokemonItem && (
          <>
            <div className={styles.PokemonImage}>
              <img
                src={pokemonItem?.sprites?.other?.home.front_default}
                alt={pokemonItem?.name}
              />
            </div>
            <div className={styles.PokemonBody}>
              <h2>{pokemonItem?.name}</h2>
              <div className={styles.PokemonInfo}>
                <div className={styles.PokemonInfoItem}>
                  <h5>Name:</h5>
                  <p>{pokemonItem?.name},</p>
                </div>

                <div className={styles.PokemonInfoItem}>
                  <h5>Type:</h5>
                  {pokemonItem?.types?.map((type) => {
                    return <p key={type.type.name}>{type.type.name},</p>;
                  })}
                </div>

                <div className={styles.PokemonInfoItem}>
                  <h5>Height:</h5>
                  <p>{pokemonItem?.height}</p>
                </div>

                <div className={styles.PokemonInfoItem}>
                  <h5>Abilities:</h5>
                  {pokemonItem?.abilities?.map((ability) => {
                    return (
                      <p key={ability.ability.name}>{ability.ability.name},</p>
                    );
                  })}
                </div>

                <div className={styles.PokemonInfoItem}>
                  <h5>Stats:</h5>
                  {pokemonItem?.stats?.map((stat) => {
                    return <p key={stat.stat.name}>{stat.stat.name},</p>;
                  })}
                </div>

                <div className={styles.PokemonInfoItem}>
                  <h5>A few moves:</h5>
                  {pokemonItem?.moves?.slice(0, 3).map((move) => {
                    return <p key={move.move.name}>{move.move.name},</p>;
                  })}
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <div className="loader">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default DetailPokemon;
