import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return <div>{characters.map((character) => Card(character))}</div>;
}
