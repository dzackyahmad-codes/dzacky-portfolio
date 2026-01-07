export const OrganizationSection = () => {
  const organizations = [
    {
      title: "Informatics Engineering Student Association",
      role: "Vice President",
      year: "2025",
      description:
        "Co-led and coordinated 115 members, managing internal operations and cross-division planning. Achieved cabinet performance score of 95.5/100.",
      image: "/projects/BE.png",
      tags: ["Leadership", "Organization Management", "Decision Making"],
    },
    {
      title: "Character Building Season (CBS)",
      role: "Project Supervisor",
      year: "2024",
      description:
        "Designed cadre development concept and supervised 91 participants, achieving a 98.9% graduation rate (90 of 91).",
      image: "/projects/CBS.png",
      tags: ["Mentorship", "Program Design", "Team Development"],
    },
  ];

  return (
    <section id="organizations" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          Organization & <span className="text-primary">Committees</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-xl overflow-hidden
                         border border-border
                         transition-all duration-300
                         hover:-translate-y-1
                         hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={org.image}
                  alt={org.title}
                  className="h-40 w-full object-cover
                             transition-transform duration-300
                             group-hover:scale-105"
                />

                {/* Role Badge */}
                <span
                  className="absolute top-4 left-4
                             px-4 py-1 text-sm font-medium
                             rounded-full
                             bg-primary/90 text-white
                             shadow-md"
                >
                  {org.role}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    {org.title}
                    </h3>

                    <span className="text-sm text-muted-foreground">
                        {org.year}
                    </span>
                </div>

                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {org.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                {org.tags.map((tag, i) => (
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
