import { Briefcase, Code, Database, Linkedin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Description */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              Informatics Engineering Undergraduate
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am an Informatics Engineering undergraduate with a strong
              interest in backend development and data-driven systems. I enjoy
              building reliable and scalable applications while continuously
              exploring how technology can solve real-world problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My experience includes backend development, data mining, and
              project leadership, with a growing interest in blockchain and
              fintech systems. I value clean architecture, collaboration, and
              continuous learning in every project I work on.
            </p>
            {/* Education Card */}
            <div className="relative mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                
                {/* Left Content */}
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">
                    Padjadjaran University
                  </h4>

                  <p className="text-primary font-medium">
                    Bachelor of Informatics Engineering
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Sumedang, West Java, Indonesia.
                    (2023 – Present)
                  </p>
                </div>

                {/* Right Meta */}
                <div className="flex flex-col items-start md:items-end gap-4">

                  <div className="rounded-xl border border-primary/30 bg-primary/5 px-5 py-4 text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Cumulative GPA
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      3.90<span className="text-base font-medium"> / 4.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Highlight Cards */}
          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building backend systems with a focus on clean architecture,
                    scalability, and maintainable code.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data & Analytics</h4>
                  <p className="text-muted-foreground">
                    Working with data-driven applications, analytics pipelines,
                    and insights to support better decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Leadership & Project Management
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in leading teams, coordinating projects, and
                    ensuring structured execution from planning to delivery.
                  </p>
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="flex flex-col items-center gap-5 pt-6">
              {/* Top actions */}
              <div className="flex flex-row gap-4">
                <a
                  href="https://www.linkedin.com/in/dzacky-ahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center
                            w-50 h-10 rounded-full
                            border border-primary text-primary
                            hover:bg-primary/10 transition-colors duration-300"
                >
                  LinkedIn
                </a>

                <a
                  href="/projects/Dzacky_Ahmad_CV.pdf"
                  download
                  className="flex items-center justify-center
                            w-50 h-10 rounded-full
                            border border-primary text-primary
                            hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>

              {/* Primary CTA */}
              <a
                href="#contact"
                className="cosmic-button px-32"
              >
                Get In Touch with Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
