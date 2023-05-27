import React, { useState } from 'react'
import styles from '@/styles/Search.module.css'
import { useGlobalContext } from '@/context/global'
import Router from 'next/router'

function Search() {
  const { searchResults, realTimeSearch } = useGlobalContext()

  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)

    realTimeSearch(search)
  }

  const handleSearch = (e) => {
    e.preventDefault()

    realTimeSearch(search)
  }

  const renderSearchResult = () => {
    return searchResults.map((pokemon) => {
      return (
        <div
          key={pokemon.id}
          onClick={() => {
            Router.push(`/detailPokemon/${pokemon.name}`);
          }}
          className={styles.pokemonName}
        >
          {pokemon.name}
        </div>
      );
    });
  }

  return (
    <>
      <form
        className={styles.searchForm}
        action=""
        onSubmit={handleSearch}
      >
        <div className={styles.inputControl}>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search for a Pokemon..."
          />
          <button className={styles.submitBtn} type="submit">
            Search
          </button>
        </div>
      </form>

      {search && searchResults.length > 0 && (
        <div className={styles.searchResults}>
          {renderSearchResult()}
        </div>
      )}
    </>
  )
}

export default Search