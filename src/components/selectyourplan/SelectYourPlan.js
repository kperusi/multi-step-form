import React, { useContext, useEffect, useReducer } from "react";
import Title from "../title/Title";
import SelectCard from "./SelectCard";
import styles from "./selectcard.module.css";
import advance from './icon-advanced.svg'
import arcade from './icon-arcade.svg'
import pro from './icon-pro.svg'
import Toggle from "../toggle/Toggle";
import { PlanContext } from "./PlanContext";
import { StepContext } from "../../context/StepContext";
const initialValues={
  monthlyColor:'',
  yearlyColor:'',
}
const reducer = (state,action)=>{
  switch(action.type){
    case'month':
    return{
      monthlyColor:'grey',
      yearlyColor:''
    }
    case'year':
    return{
      monthlyColor:'',
      yearlyColor:'grey'
    }
  
  default:
    return state
  };
}
export default function SelectYourPlan() {

  const [states,dispatch]=useReducer(reducer,initialValues)
 

  const {check} = useContext(StepContext)
 
  useEffect(()=>{
    if(check===true){
dispatch({type:'month'})
    }
    else{
      dispatch({type:'year'})
    }
  },[check])

  console.log(check)

  return (
    <main className={styles.selectyourplan}>
      <PlanContext.Provider value={{states:states,check:check}}>
  

      
      <Title
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className={styles.selectCardWrap}>
      <SelectCard mainText="Arcade" amount= {check?"$90/yr":"$9/mo"} src={arcade} backgroundColor='background'/>
      <SelectCard mainText="Advance" amount={check?"$120/yr":"$12/mo"} src={advance}/>
      <SelectCard mainText="Pro" amount={check?"$150/yr":"$15/mo"} src={pro}/>
      </div>
      <div className={styles.selector}>
        <Toggle option1='Monthly' option2='Yearly' states={states}></Toggle>
      </div>
      </PlanContext.Provider>
    </main>
  );
}
