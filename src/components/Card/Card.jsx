import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.character}>
      <div className={styles.card}>
        <button onClick={props.onClose} className={styles.button}>
          X
        </button>
        <img src={props.image} alt={props.name} className={styles.image} />
        <h2 className={styles.name}>{props.name}</h2>
        <section className={styles.footer}>
          <h2 className={styles.species}>Specie: {props.species}</h2>
          <h2 className={styles.gender}>Gender: {props.gender}</h2>
        </section>
      </div>
    </div>
  );
}
