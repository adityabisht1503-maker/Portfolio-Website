import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data";
import useReveal from "../hooks/useReveal";

const Projects = () => {
  const [ref, visible] = useReveal();

  return (
    <section className={`section${visible ? " in-view" : ""}`} id="projects" ref={ref}>
      <p className="eyebrow">Projects</p>
      <h2 className="section-title">Selected work</h2>

      <div className="project-list">
        {projects.map((p, i) => (
          <div
            className="project-row reveal"
            key={p.title}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="project-index">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href={p.live} target="_blank" rel="noreferrer">
                Live <ArrowUpRight size={13} />
              </a>
              <a href={p.code} target="_blank" rel="noreferrer">
                Code <GithubIcon size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
