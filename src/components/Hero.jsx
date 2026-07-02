import { ArrowRight, FileDown } from "lucide-react";
import { profile, stats } from "../data";

const Hero = () => {
  const lines = profile.headline.split("\n");
  return (
    <section className="section hero" id="home">
      <p className="hero-kicker">{profile.kicker}</p>
      <h1>
        {lines.map((line, i) => (
          <span key={i}>
            {i === lines.length - 1 ? <em>{line}</em> : line}
            {i !== lines.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <p className="hero-sub">{profile.subline}</p>

      <div className="hero-actions">
        <a href="#projects" className="btn btn-solid">
          See my work <ArrowRight size={15} />
        </a>
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
          Resume <FileDown size={15} />
        </a>
      </div>

      <div className="hero-stats">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="hero-stat-num">{s.num}</div>
            <div className="hero-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
