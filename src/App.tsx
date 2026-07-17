import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TrainingCenter from "./components/TrainingCenter";
import WhyUs from "./components/WhyUs";
import FinalCta from "./components/FinalCta";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
   <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <TrainingCenter />
      <WhyUs />
      <FinalCta />
      <Contacts />
    </main>
    <Footer />
    <ScrollToTop />
   </>
  )
}

export default App;