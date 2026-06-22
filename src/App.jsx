import { useState } from "react";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import TrustedBrands from "./pages/TrustedBrands";
import ServicesSection from "./pages/ServicesSection";
import PortfolioSection from "./pages/PortfolioSection";
import WhyChooseUs from "./pages/WhyChooseUs";
import Footer from "./pages/Footer";
import CustomCursor from "./pages/CustomCursor";
import TestimonialSection from "./pages/TestimonialSection";

function App() {
  return (
    <>
        <div className="cursor-none">
      <CustomCursor />

      {/* Website Content */}
    </div>
      <div className="bg-[#FAF7F3] ">
        <Navbar />
        <HeroSection />
        <TrustedBrands></TrustedBrands>
        <ServicesSection></ServicesSection>
        <PortfolioSection></PortfolioSection>
        <WhyChooseUs></WhyChooseUs>
        <TestimonialSection></TestimonialSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
