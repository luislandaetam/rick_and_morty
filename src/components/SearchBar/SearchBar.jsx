import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(id);
    setId("");
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.group}>
        <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search"
          type="search"
          name="id"
          className={styles.input}
          value={id}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={styles.btn}>
        Agregar
      </button>
      <button
        type="submit"
        id="random"
        onClick={() => setId(Math.trunc(Math.random() * (826 - 1) + 1))}
        className={styles.btn}
      >
        Random
      </button>
    </form>
  );
}
