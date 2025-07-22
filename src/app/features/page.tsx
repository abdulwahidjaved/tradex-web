import FooterBlock from "../Footer";
import Navbar from "../NavBar";
import CtaSection from "./widgets/CTASection";
import Services from "./widgets/Features.Section";
import PricingSection from "./widgets/PricingSection";

const Features = () => {
    return (
        <>
        <Navbar />
        <Services />
        <PricingSection />
        <CtaSection />
        <FooterBlock />
        </>
    );
};

export default Features;