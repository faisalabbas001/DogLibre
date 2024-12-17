import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Shadow from "./components/Shadow";
import Section from "./components/Section";
import Loader from "./loader/index";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);


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
