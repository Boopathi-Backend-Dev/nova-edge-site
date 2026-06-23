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
  const [muted, setMuted] = useState(true);

  if (!videoEnded) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black">
        <video
          autoPlay
          muted={muted}
          playsInline
          className="w-full h-full object-cover"
          onEnded={() => setVideoEnded(true)}
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Unmute Button */}
        {muted && (
          <button
            onClick={() => setMuted(false)}
            className="
              absolute
              top-4 right-4
              sm:top-6 sm:right-6
              px-4 py-2
              rounded-full
              bg-black/40
              backdrop-blur-md
              border border-white/20
              text-white
              font-medium
              transition-all duration-300
              hover:bg-white
              hover:text-black
            "
          >
            🔊 Unmute
          </button>
        )}

        {/* Skip Button */}
        <button
          onClick={() => setVideoEnded(true)}
          className="
            absolute
            bottom-4 right-4
            sm:bottom-6 sm:right-6
            lg:bottom-8 lg:right-8
            px-4 py-2
            rounded-full
            bg-white/10
            backdrop-blur-md
            border border-white/20
            text-white
            font-medium
            transition-all duration-300
            hover:bg-white
            hover:text-black
          "
        >
          Skip Intro →
        </button>
      </div>
    );
  }

  return (
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
  );
}

export default App;
