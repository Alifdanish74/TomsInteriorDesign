import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import LatestProjects from "./components/LatestProject";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function HomePage() {
  return (
    <div className="mb-10 scroll-smooth">
      <ScrollToTopButton />
      <section id="hero">
        <Hero />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <WhyChooseUs />
      <Services />
      <LatestProjects />
    </div>
  );
}
