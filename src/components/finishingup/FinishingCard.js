import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/styles.css";
import { StepContext } from "../../context/StepContext";
export default function FinishingCard(props) {
  const {check} = React.useContext(StepContext)
  return (
    <main className="finishing-card">
      <div className="sections-wrap">
        <section className="firststep-wrap">
          <div className="pinfo-wrap">
            <h1 className="h1-arcade">Arcade(Monthly)</h1>
            <NavLink className="navlink" to="/personalInfo">
              Change
            </NavLink>
          </div>
          <div className="amount-wraps">
            <h3 className="h3-b">
              <strong>{check?'$90/yr':'$9/mo'} </strong>
            </h3>
          </div>
        </section>

        <span className="line"></span>

        <section className="other" style={{ marginTop: "20px" }}>
          <div className="online-wrap">
            <p className="online">Online service</p>
            <h4 className="amounts h4-sm ">{check?'+$10/yr':'+1$/mo'}</h4>
          </div>
          <div className="large-storage-wrap">
            <p className="large-storage">Large storage</p>
            <h4 className="amounts h4-sm">{check?"+$20/yr":'+$2mo'}</h4>
          </div>
        </section>
        
      </div>
      <section className="total">
            <p className="p-total">Total (per month)</p>
            <h1 style={{color:'var(--Purplishblue)'}}>{check?"$120/yr":'+$12/mo'}</h1>
        </section>
    </main>
  );
}
