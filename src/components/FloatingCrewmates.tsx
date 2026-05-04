import crewRed from "@/assets/crewmate-red.png";
import crewCyan from "@/assets/crewmate-cyan.png";
import crewPurple from "@/assets/crewmate-purple.png";
import crewGreen from "@/assets/crewmate-green.png";

const FloatingCrewmates = () => {
  const items = [
    { src: crewRed, top: "12%", left: "6%", size: 110, anim: "animate-float-slow", delay: "0s", rotate: -8 },
    { src: crewCyan, top: "22%", right: "8%", size: 130, anim: "animate-float-slower", delay: "0.6s", rotate: 6 },
    { src: crewGreen, bottom: "18%", left: "9%", size: 100, anim: "animate-float-slower", delay: "1.2s", rotate: 10 },
    { src: crewPurple, bottom: "12%", right: "6%", size: 120, anim: "animate-float-slow", delay: "0.3s", rotate: -6 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {items.map((it, i) => (
        <div
          key={i}
          className={`absolute ${it.anim}`}
          style={{
            top: it.top, left: it.left, right: it.right, bottom: it.bottom,
            animationDelay: it.delay,
          }}
        >
          <img
            src={it.src}
            alt=""
            width={it.size}
            height={it.size}
            loading="lazy"
            style={{
              width: it.size, height: it.size,
              transform: `rotate(${it.rotate}deg)`,
              filter: "drop-shadow(0 20px 30px hsl(250 85% 30% / 0.4))",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingCrewmates;
