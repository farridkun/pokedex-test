import React from "react";
import styles from "@/styles/Pokemon.module.css";

function DetailPokemon() {
  return (
    <div
      className={styles.PokemonBg}
    >
      <div className={styles.PokemonImage}>
        {/* img pokemon selected */}
        <img />
      </div>
      <div className={styles.PokemonBody}>
        {/* title bigger */}
        <h2>Pokemon</h2>
        <div className={styles.PokemonInfo}>
          <div className={styles.PokemonInfoItem}>
            <h5>Name:</h5>
            {/* title pokemon */}
            <p>Pikachu</p>
          </div>

          <div className={styles.PokemonInfoItem}>
            <h5>Type:</h5>
            {/* type pokemon */}
            <p>Nature</p>
          </div>

          <div className={styles.PokemonInfoItem}>
            <h5>Height:</h5>
            {/* heigh pokemon */}
            <p>123cm</p>
          </div>

          <div className={styles.PokemonInfoItem}>
            <h5>Abilities:</h5>
            {/* abilitites pokemon */}
            <p>Jump High</p>
          </div>

          <div className={styles.PokemonInfoItem}>
            <h5>Stats:</h5>
            {/* stats pokemon */}
            <p>hp, attacks</p>
          </div>

          <div className={styles.PokemonInfoItem}>
            <h5>A few moves:</h5>
            {/* moves pokemon */}
            <p>razor-winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPokemon;
