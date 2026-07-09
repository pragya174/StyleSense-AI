import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/ui/HeroSection";
import HowItWorks from "../components/ui/HowItWorks";
import FeaturesSection from "../components/ui/FeaturesSection";
import BeautyCategories from "../components/ui/BeautyCategories";
import AboutSection from "../components/ui/AboutSection";
import CTASection from "../components/ui/CTASection";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <BeautyCategories />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default LandingPage;