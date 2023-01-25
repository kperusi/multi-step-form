import React from "react";
import styles from "./toggle.module.css";
import "./styles/style.css";
import { StepContext } from "../../context/StepContext";

export default function Toggle(props) {

  const {check,checkHandler} = React.useContext(StepContext)
  
console.log(check)

  return (
    <main className={styles.toggle}>
      <p className={`${props.states.monthlyColor} ${styles.p}`} style={{ fontWeight: "700" }}>
        {props.option1}
      </p>

      <label className={styles.switch}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={checkHandler}
          defaultChecked={check}
        />
        <span className={styles.slider}></span>
      </label>
      
      <p className={`${props.states.yearlyColor} ${styles.p}`} style={{ fontWeight: "700" }}>
        {props.option2}
      </p>
    </main>
  );
}
