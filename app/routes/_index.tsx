import Footer from "~/components/Footer";
import From from "~/components/From";
import HeroSection from "~/components/HeroSection";
import NavbarLogo from "~/components/NavbarLogo";
import NavbarOne from "~/components/NavbarOne";
import Offers from "~/components/Offers";
import Problem from "~/components/Problem";
import Services from "~/components/Services";

export default function Index() {
  return (
    <>
   <NavbarOne/>
   <NavbarLogo/>
   <HeroSection/>
   {/* <Problem/> */}
   <From/>
   <Services/> 
   <Offers/>
   <Footer/>
    </>
  );
}
