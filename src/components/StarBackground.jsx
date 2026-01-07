import { useEffect, useState } from "react";

const STAR_LAYERS = [
  { countRatio: 0.5, size: [0.8, 1.4], speed: [40, 60] }, // far
  { countRatio: 0.35, size: [1.2, 2], speed: [25, 40] }, // mid
  { countRatio: 0.15, size: [2, 3], speed: [15, 25] },  // near
];

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();

    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  const generateStars = () => {
    const area = window.innerWidth * window.innerHeight;
    const baseCount = Math.floor(area / 14000);

    const generated = [];
    let id = 0;

    STAR_LAYERS.forEach((layer) => {
      const count = Math.floor(baseCount * layer.countRatio);

      for (let i = 0; i < count; i++) {
        generated.push({
          id: id++,
          size:
            Math.random() * (layer.size[1] - layer.size[0]) +
            layer.size[0],
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.4 + 0.4,
          duration:
            Math.random() * (layer.speed[1] - layer.speed[0]) +
            layer.speed[0],
          driftX: Math.random() * 60 - 30,
          driftY: Math.random() * 60 - 30,
        });
      }
    });

    setStars(generated);
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Camera drift */}
      <div className="absolute inset-0 animate-space-drift">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white animate-star-drift"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              "--drift-x": `${star.driftX}px`,
              "--drift-y": `${star.driftY}px`,
            }}
          />
        ))}
      </div>

      {/* Earth glow */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2
                      w-[900px] h-[900px]
                      rounded-full
                      bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_65%)]" />
    </div>
  );
};
