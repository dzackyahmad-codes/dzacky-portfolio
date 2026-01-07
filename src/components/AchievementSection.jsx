export const AchievementSection = () => {
  const achievements = [
    {
      title: "English Proficiency Test (EPT)",
      year: "2025",
      image: "/projects/ept.png",
      description:
        "Achieved an English Proficiency Test (EPT) score of 523, demonstrating strong academic and professional English communication skills.",
      tags: ["English", "Academic", "Certification"],
    },
    {
      title: "Finalist GEMASTIK 2025 – Data Mining",
      year: "2025",
      image: "/projects/gemastik.jpg",
      description:
        "Finalist in GEMASTIK 2025 (Data Mining category), focusing on analytical problem solving and data-driven insight generation.",
      tags: ["Data Mining", "Competition", "National", "Finalist"],
    },
  ];

  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          Achievements &{" "}
          <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-xl overflow-hidden
                         border border-border
                         transition-all duration-300
                         hover:-translate-y-1
                         hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
            >
              {/* Image (INTENTIONALLY CROPPED) */}
              <div className="h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover
                             transition-transform duration-300
                             group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {item.year}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                                 border border-primary/40 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
