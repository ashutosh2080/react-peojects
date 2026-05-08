import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Project from "./pages/Projects";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
     
    </div>
  );
}
