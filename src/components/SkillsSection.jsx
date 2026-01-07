import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },

  // Backend
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Flask", category: "backend" },

  // Tools & Data
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "MySQL", category: "tools" },
  { name: "Streamlit", category: "tools" },
  { name: "TensorFlow", category: "tools" },
  { name: "PyTorch", category: "tools" },
  { name: "Google Colab", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Spreadsheets", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const coreSkills = ["Python", "Java", "SQL", "Node.js", "React", "Git", "Spreadsheets" ];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        {/* Core Skills Highlight */}
        <div className="mb-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Core technologies I frequently work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full bg-primary/10 text-primary
                           border border-primary/30 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full border transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "bg-card border rounded-xl px-4 py-3 text-center text-sm font-medium",
                "opacity-0 animate-fade-in",
                "hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]",
                "transition-all duration-300","border-border hover:border-primary hover:text-primary"
              )}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
