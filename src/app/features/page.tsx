import FooterBlock from "../Footer";
import Navbar from "../NavBar";
import ScrollFade from "../ScrollFade";
import CtaSection from "./widgets/CTASection";
import Services from "./widgets/Features.Section";
import PricingSection from "./widgets/PricingSection";

const Features = () => {
    return (
        <>
        <ScrollFade><Navbar /></ScrollFade>
        <ScrollFade><Services /></ScrollFade>
        <ScrollFade><PricingSection /></ScrollFade>
        <ScrollFade><CtaSection /></ScrollFade>
        <ScrollFade><FooterBlock /></ScrollFade>
        </>
    );
};

export default Features;