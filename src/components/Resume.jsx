import { FileDown } from "lucide-react";
import { profile } from "../data";
import useReveal from "../hooks/useReveal";

const Resume = () => {
  const [ref, visible] = useReveal();

  return (
    <section className={`section${visible ? " in-view" : ""}`} id="resume" ref={ref}>
      <p className="eyebrow">Resume</p>
      <h2 className="section-title">Want the full picture?</h2>

      <div className="resume-box reveal">
        <div>
          <h3>Download my resume</h3>
          <p>A complete overview of my experience, education, and skills in one PDF.</p>
        </div>
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-solid">
          Download <FileDown size={15} />
        </a>
      </div>
    </section>
  );
};

export default Resume;
