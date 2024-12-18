import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Shadow from "./components/Shadow";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <Shadow />
    </div>
  );
}

export default App;
