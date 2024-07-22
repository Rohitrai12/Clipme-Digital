import React from "react";
import HeroSection from "./Components/HeroSection";
import InfoSection from "./Components/InfoSection";
import ServicesSection from "./Components/ServicesSection";
import ElevateBrandSection from "./Components/ElevateBrandSection";
import AvailablePlans from "./Components/AvailablePlans";
import SatisfiedClients from "./Components/SatisfiedClients";
import Plans from "./Components/Plans";
import PricingPlans from "./Components/PricingPlans";

function App() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <ServicesSection />
      <ElevateBrandSection />
      <AvailablePlans />
      <SatisfiedClients />
      <PricingPlans />
      <Plans />
    </>
  );
}

export default App;
