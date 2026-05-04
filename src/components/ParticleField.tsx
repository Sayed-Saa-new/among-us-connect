import { useMemo } from "react";

const ParticleField = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 4,
        hue: Math.random() > 0.5 ? 270 : 190,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `hsl(${p.hue} 95% 65%)`,
            boxShadow: `0 0 ${p.size * 4}px hsl(${p.hue} 95% 65%)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
