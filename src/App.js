import React from "react";
import {
  Navbar,
  Hero,
  APIForm,
  APIResults,
  AdvancedSection,
  GetStarted,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="app bg-light container">
      <Navbar />
      <Hero />
      <APIForm />
      <APIResults />
      <AdvancedSection />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
