import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon,LeetcodeIcon } from "./BrandIcons";
import { navSections, profile } from "../data";

const Nav = ({ active, onNavigate }) => {
  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="nav-name">{profile.name}</div>
        <div className="nav-role">{profile.role}</div>

        <ul className="nav-links" role="list">
          {navSections.map((s) => (
            <li key={s.id}>
              <button
                className={active === s.id ? "active" : ""}
                onClick={() => onNavigate(s.id)}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-social">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon size={17} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinIcon size={17} />
        </a>
        <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X">
          <XIcon size={17} />
        </a>
        <a href={profile.Leetcode} target="_blank" rel="noreferrer" aria-label="Leetcode">
          <LeetcodeIcon size={17} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={17} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
