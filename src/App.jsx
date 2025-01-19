import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import MaterialPage from "./components/MaterialPage";
import BodyPage from "./components/BodyPage";
import PricingPage from "./components/PricingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <LandingPage />
        <MaterialPage />
        <BodyPage />
        <PricingPage />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
