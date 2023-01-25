import React, { useContext } from 'react'
import { StepContext } from '../../context/StepContext'
import Title from '../title/Title'
import Card from './Card'
import './style/style.css'
import { Helmet } from 'react-helmet'

export default function PickCard() {

  const {check} = useContext(StepContext); 
  

  return (
    <div className='pick-card'>
       <Helmet>
        <title>Pick add-ons</title>
      </Helmet>
      <Title title='Pick add-ons' description='Add-ons help enhance your gaming experience'/>
      <Card heading ='Online Service' desc='Access to multiplayer games' amount={check?'$10/yr':'+$1/mo'} checks='true' backgroundColor='background-color' />
      <Card heading ='Online Service' desc='Extra 1TB of cloud save' amount={check?'$20/yr':'+$2/mo'} checks='true' backgroundColor='background-color' />
      <Card heading ='Online Service' desc='Custom theme on your profile' amount={check?'$20/yr':'+$2/mo'}/>
    </div>
  )
}
