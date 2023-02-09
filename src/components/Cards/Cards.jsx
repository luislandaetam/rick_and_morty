import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.characters}>
      {characters.map((character) => (
        <div>{Card(character)}</div>
      ))}
    </div>
  );
}
