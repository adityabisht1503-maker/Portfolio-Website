import { about } from "../data";
import useReveal from "../hooks/useReveal";

const About = () => {
  const [ref, visible] = useReveal();

  return (
    <section className={`section${visible ? " in-view" : ""}`} id="about" ref={ref}>
      <p className="eyebrow">About</p>
      <h2 className="section-title">A bit about me</h2>

      <div className="about-grid reveal">
        <div className="about-text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="about-facts">
          {about.facts.map((f) => (
            <div className="fact" key={f.label}>
              <div className="fact-label">{f.label}</div>
              <div className="fact-value">{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
