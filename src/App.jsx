import { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { navSections, profile } from "./data";
import "./App.css";

function App() {
  const [active, setActive] = useState("home");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) {
        sectionRefs.current[s.id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="layout">
      <Nav active={active} onNavigate={handleNavigate} />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Resume />
        <Contact />
        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
