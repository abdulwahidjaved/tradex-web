import FooterBlock from "../Footer";
import Navbar from "../NavBar";
import BlogSection from "./widgets/BlogSection";
import ContentSection from "./widgets/Content";
import MetricsSection from "./widgets/MetricesSection";

const AboutUs = () => {
    return (
        <>
        <Navbar />
        <BlogSection />
        <ContentSection />
        <MetricsSection />
        <FooterBlock />
        </>
    );
};

export default AboutUs;