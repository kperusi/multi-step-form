import React from "react";
import { PlanContext } from "./PlanContext";
import styles from "./selectcard.module.css";
import './styles/styles.css'
export default function SelectCard(props) {
  const states = React.useContext(PlanContext)

  console.log(states.check)
  return (
    <main className={`${styles.selectCard} ${props.backgroundColor}` } >
      <img src={props.src} alt={props.name} className={styles.img} />
      <div className={styles.descWrap}>
      <h4 className={styles.h4}>{props.mainText}</h4>
      <p className={styles.p}>{props.amount}</p>
      {states.check && <p className={styles.p2}>2 months free</p>}
      </div>
    </main>
  );
}
