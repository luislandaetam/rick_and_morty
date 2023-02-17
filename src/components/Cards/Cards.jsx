import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  const onClose = () => window.alert("Emulamos que se cierra la card");
  return (
    <div className={styles.cards}>
      {characters.map((character) => {
        character.onClose = onClose;
        return Card(character);
      })}
    </div>
  );
}
