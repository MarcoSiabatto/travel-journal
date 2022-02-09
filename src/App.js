import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  const cards = data.map((data) => {
    return (
      <Card
        {...data}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      {cards}
      <Footer />
    </div>
  );
}

export default App;
