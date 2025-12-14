import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Why from "../components/Why";
import Guides from "../components/Guides";
import Testimonials from "../components/Testimonials";
import HowToUse from "../components/HowToUse";
import ContactForm from "../components/ContactForm";
import Badges from "../components/Badges";
export default function Home() {
  return (
    <div className="w-full min-h-screen  bg-white">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero />
      <Why/>
      
      <Guides/>
      <Badges/>
    <Testimonials/>
      {/* Footer */}
      <Footer />
    </div>
  );
}
