import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
// import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { ScrollToTop } from "@/components/ScrollToTop";
// import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import "./App.css";




function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {/* <Sponsors /> */}
      <About />
      <HowItWorks />
      <Features />
      {/* <Services /> */}
      {/* <Cta /> */}
      <Testimonials />
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;