import React from "react";
import Title from "../title/Title";
import FinishingCard from "./FinishingCard";
import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from '../personalinfo/PersonalInfo'

export default function FinishCard() {
  return (
    <main className="mains">
    
      <Title
        title="Finishing up"
        description="Double-check everything looks Ok before confirming"
      />
      <FinishingCard />
    </main>
  );
}
