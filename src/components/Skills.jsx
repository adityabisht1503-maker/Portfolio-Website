import { skillGroups } from "../data";
import useReveal from "../hooks/useReveal";

const Skills = () => {
  const [ref, visible] = useReveal();

  return (
    <section className={`section${visible ? " in-view" : ""}`} id="skills" ref={ref}>
      <p className="eyebrow">Skills</p>
      <h2 className="section-title">What I work with</h2>

      <div className="skills-groups">
        {skillGroups.map((group, gi) => (
          <div
            className="reveal"
            key={group.title}
            style={{ transitionDelay: `${gi * 90}ms` }}
          >
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-list">
              {group.skills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <span>{s.name}</span>
                  <span className="skill-bar">
                    <span style={{ width: visible ? `${s.level}%` : "0%" }}></span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
