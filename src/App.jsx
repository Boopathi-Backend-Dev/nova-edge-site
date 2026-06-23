import { useState } from "react";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import TrustedBrands from "./pages/TrustedBrands";
import ServicesSection from "./pages/ServicesSection";
import PortfolioSection from "./pages/PortfolioSection";
import WhyChooseUs from "./pages/WhyChooseUs";
import Footer from "./pages/Footer";
import TestimonialSection from "./pages/TestimonialSection";
import introVideo from "./assets/intro.mp4";

function App() {
  const [videoEnded, setVideoEnded] = useState(false);

  if (!videoEnded) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
        <video
          autoPlay
          playsInline
          className="
            w-full
            h-full
            object-contain
            lg:object-cover
            bg-black
          "
          onEnded={() => setVideoEnded(true)}
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button
          onClick={() => setVideoEnded(true)}
          className="
            absolute
            bottom-4
            right-4
            sm:bottom-6
            sm:right-6
            lg:bottom-8
            lg:right-8

            px-4
            py-2
            sm:px-5
            sm:py-2.5
            lg:px-6
            lg:py-3

            text-sm
            sm:text-base

            rounded-full
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            text-white
            font-medium
            tracking-wide
            shadow-lg
            transition-all
            duration-300

            hover:bg-white
            hover:text-black
            hover:scale-105
            hover:shadow-2xl
          "
        >
          Skip Intro →
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="bg-[#FAF7F3]">
        <Navbar />
        <HeroSection />
        <TrustedBrands />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUs />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
}
export default App;
