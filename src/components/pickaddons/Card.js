import React from 'react'
import './style/style.css'
export default function Card(props) {
  return (
    <main className={`card ${props.backgroundColor}`}>
        <div className="input-wrap">
            <input type="checkbox" className='checkbox' 
            defaultChecked={props.checks}/>
        </div>
        <div className="desc-wrap">
            <h2 className='heading'>{props.heading}</h2>
            <p className="desc">{props.desc}</p>
        </div>
        <div className="amount-wrap">
            <h4 className="amount">
                {props.amount}
            </h4>
        </div>
        
    </main>
  )
}
