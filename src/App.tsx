import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TrainingCenter from "./components/TrainingCenter";

function App() {
  return (
   <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <TrainingCenter />
    </main>
   </>
  )
}

export default App;