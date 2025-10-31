import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate.scroll");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.1,
    });
  
    elements.forEach(el => observer.observe(el));
  
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
  
  return (
    <div className="App">
     <Header />
     <Home />
     <About />
     <Education />
     <Skills />
     <Project />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
