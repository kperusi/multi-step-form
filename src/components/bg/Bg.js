import React from 'react'
import styles from './bg.module.css'
import Indicator from './Indicator'
import { StepContext } from '../../context/StepContext'
export default function Bg() {
  let check = React.useContext(StepContext)
 
  return (
    <main className={styles.main}>
      <div className={styles.parentIndicator}>
      <Indicator description='YOUR INFO' number='1' check={check.steps.firstStep} />
      <Indicator description = 'SELECT PLAN' number='2' check={check.steps.secondStep}/>
      <Indicator description = 'ADD-ONS' number ='3' check={check.steps.thirdStep}/>
      <Indicator description = 'SUMMARY' number='4' check={check.steps.forthStep}/>
     
      </div>
     
 
    </main >
  )
}
