import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Happy Weather App</h1>
      <Weather />
      <Footer />
    </div>
  );
}
