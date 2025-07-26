import FooterBlock from "../Footer";
import Navbar from "../NavBar";
import ScrollFade from "../ScrollFade";
import CtaSection from "./widgets/CTASection";
import Section1 from "./widgets/Section1";

const ContactUs = () => {
    return (
        <>
         <ScrollFade><Navbar /></ScrollFade>
         <ScrollFade><Section1 /></ScrollFade>
         <ScrollFade><CtaSection /></ScrollFade>
         <ScrollFade><FooterBlock /></ScrollFade>
        </>
    );
};

export default ContactUs;