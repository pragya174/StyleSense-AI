import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-8 pb-16 lg:flex-row">
      <HeroContent />
      <HeroPreview />
    </section>
  );
}

export default HeroSection;