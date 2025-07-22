import FooterBlock from "../Footer";
import Navbar from "../NavBar";
import ContentSection from "./widgets/Content";
import CtaSection from "./widgets/CTASection";
import HeroSection from "./widgets/HeroSection";
import MetricsSection from "./widgets/Metrices";
import TestimonialSection from "./widgets/Testonomial";

const Home = () => {
    return (
        <>
        <Navbar />
        <HeroSection />
        <ContentSection />
        <MetricsSection />
        <TestimonialSection />
        <CtaSection />
        <FooterBlock />
        </>
    );
};

export default Home;