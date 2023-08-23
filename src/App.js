import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";




function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <About />
     <Education />
     <Skills />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
