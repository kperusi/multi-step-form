import React from "react";
// import { StepContext } from "../../context/StepContext";
import styles from "./bg.module.css";
import './styles/styles.css'

export default function Indicator(props) {

  return (
    <div className={styles.indicatorWrap}>
      <span className={`${props.check} ${styles.indicatorSpan}`}>
        {props.number}
      </span>
      <div className={styles.descWrap}>
      <p className={styles.p}>STEP {props.number}</p>
      <h4 className={styles.h3}>{props.description}</h4>

      </div>
     
    </div>
  );
}
