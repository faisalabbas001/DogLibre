import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Shadow from "./components/Shadow";
import Section from "./components/Section";
import Loader from "./loader/index";

function App() {
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Simulate a delay to display the loader
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  // Show the loader if loading is true
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <Section />
      <Shadow />
    </div>
  );
}

export default App;
