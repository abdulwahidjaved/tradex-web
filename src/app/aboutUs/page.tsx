import FooterBlock from "../Footer";
import Navbar from "../NavBar";
import ScrollFade from "../ScrollFade";
import BlogSection from "./widgets/BlogSection";
import ContentSection from "./widgets/Content";
import MetricsSection from "./widgets/MetricesSection";

const AboutUs = () => {
    return (
        <>
        <ScrollFade><Navbar /></ScrollFade>
        <ScrollFade><BlogSection /></ScrollFade>
        <ScrollFade><ContentSection /></ScrollFade>
        <ScrollFade><MetricsSection /></ScrollFade>
        <ScrollFade><FooterBlock /></ScrollFade>
        </>
    );
};

export default AboutUs;