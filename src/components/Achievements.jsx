import { useEffect, useRef, useState } from "react";
import { Code2, Trophy, Rocket, Layers } from "lucide-react";
import { achievements } from "../data";
import useReveal from "../hooks/useReveal";

const ICONS = { Code2, Trophy, Rocket, Layers };

// Counts up from 0 to `value` once it scrolls into view.
const Counter = ({ value, suffix, duration = 1400 }) => {
  const ref = useRef(null);
  const started = useRef(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="achievement-num">
      {count}
      {suffix}
    </span>
  );
};

const Achievements = () => {
  const [ref, visible] = useReveal();

  return (
    <section
      className={`section${visible ? " in-view" : ""}`}
      id="achievements"
      ref={ref}
    >
      <p className="eyebrow">Achievements</p>
      <h2 className="section-title">Milestones so far</h2>

      <div className="achievements-grid">
        {achievements.map((a, i) => {
          const Icon = ICONS[a.icon];
          return (
            <div
              className="achievement-card reveal"
              key={a.label}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="achievement-icon">
                {Icon ? <Icon size={22} /> : null}
              </div>
              <Counter value={a.value} suffix={a.suffix} />
              <div className="achievement-label">{a.label}</div>
              <p className="achievement-desc">{a.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
