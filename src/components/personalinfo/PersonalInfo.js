import React from "react";

import Title from "../title/Title";
import Form from "./Form";
import'./styles/personalinfostyles.css';
export default function PersonalInfo(props) {
  return (
    <div className='mains'>
      <Title
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <Form />
    </div>
  );
}
