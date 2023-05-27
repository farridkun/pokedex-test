import React from 'react'
import styles from '@/styles/Search.module.css'

function Search() {
  return (
    <form className={styles.searchForm}>
      <div className={styles.inputControl}>
        <input
          type="text"
          placeholder="Search for a Pokemon..."
        />
        <button className={styles.submitBtn} type="submit">
          Search
        </button>
      </div>
    </form>
  )
}

export default Search