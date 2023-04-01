import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Header />
    <Home />
    <Skills />
    <Timeline/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>
  );
}

export default App;
