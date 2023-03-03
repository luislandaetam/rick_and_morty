import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={styles.cards}>
      {characters &&
        characters.map((character) => (
          <Card character={character} onClose={onClose} />
        ))}
    </div>
  );
}
