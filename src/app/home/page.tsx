import FooterBlock from "../Footer";
import Navbar from "../NavBar";
import ContentSection from "./widgets/Content";
import CtaSection from "./widgets/CTASection";
import HeroSection from "./widgets/HeroSection";
import MetricsSection from "./widgets/Metrices";
import TestimonialSection from "./widgets/Testonomial";
import ScrollFade from "./../ScrollFade"; // Adjust path if needed

const Home = () => {
  return (
    <>
      <Navbar />
      <ScrollFade><HeroSection /></ScrollFade>
      <ScrollFade><ContentSection /></ScrollFade>
      <ScrollFade><MetricsSection /></ScrollFade>
      <ScrollFade><TestimonialSection /></ScrollFade>
      <ScrollFade><CtaSection /></ScrollFade>
      <FooterBlock />
    </>
  );
};

export default Home;
