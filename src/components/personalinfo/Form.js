import React from "react";
import { StepContext } from "../../context/StepContext";
import './styles/personalinfostyles.css';
export default function Form() {
  const {
    nameHandler,
    name,
    emailHandler,
    email,
    phoneNumberHandler,
    phoneNumber,
    isNameEmpty,
    isEmailEmpty,
    isPhoneNumberEmpty,
    isEmptyClass,
    emailEmptyClass,
    phoneNumberEmptyClass,
  } = React.useContext(StepContext);
console.log(isEmptyClass)


  return (
    <div className={'form'}>
      <div className={'labelwrap'}>
        <label className={'label'} htmlFor='name' >Name</label>
        {isNameEmpty && (
          <label className={`error `}>This field is required</label>
        )}
      </div>

      <input
        type="text"
        className={`input ${isEmptyClass}`}
        placeholder=" e.g. Stephen King"
        value={name}
        onInput={nameHandler}
      />

      <div className={'labelwrap'}>
        <label className={'label'}>Email Address</label>
        {isEmailEmpty && (
          <label className={`error`}>This field is required</label>
        )}
      </div>
      <input
        type="text"
        className={`input ${emailEmptyClass}`}
        placeholder=" e.g. stephenking@lorem.com"
        value={email}
        onChange={emailHandler}
        required={true}
      />

      <div className={'labelwrap'}>
        <label className={'label'}>Phone Number</label>
        {isPhoneNumberEmpty &&(
          <label className={`error`}>This field is required</label>
        )}
      </div>
      <input
        className={`input ${phoneNumberEmptyClass}`}
        value={phoneNumber}
        onChange={phoneNumberHandler}
        placeholder="  e.g. +1 234 567 890"
      />
    </div>
  );
}
