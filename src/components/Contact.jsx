import { ArrowUpRight } from "lucide-react";
import { profile } from "../data";
import useReveal from "../hooks/useReveal";

const Contact = () => {
  const [ref, visible] = useReveal();

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "GitHub", value: "View profile", href: profile.github },
    { label: "LinkedIn", value: "View profile", href: profile.linkedin },
    { label: "Twitter / X", value: "View profile", href: profile.twitter },
     { label: "Leetcode", value: "View profile", href: profile.Leetcode },
  ];

  return (
    <section className={`section${visible ? " in-view" : ""}`} id="contact" ref={ref}>
      <p className="eyebrow">Contact</p>
      <h2 className="section-title">Let's talk</h2>

      <div className="contact-grid reveal">
        <p style={{ color: "var(--muted)", fontSize: "1.02rem", lineHeight: 1.7, maxWidth: "48ch" }}>
          Seeking a Web Developer position where I can apply my skills and experience to develop innovative web
solutions, contribute to team success, and continue expanding my professional knowledge.
        </p>

        <div className="contact-list">
          {links.map((l) => (
            <a className="contact-row" href={l.href} target="_blank" rel="noreferrer" key={l.label}>
              <div>
                <div className="contact-row-label">{l.label}</div>
                <div className="contact-row-value">{l.value}</div>
              </div>
              <ArrowUpRight size={18} className="contact-row-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
