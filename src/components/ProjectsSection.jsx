import { Code } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Noted – Daily Tracker",
      role: "Backend Developer",
      description:
        "GUI-based productivity and finance tracking application built with Java using MVC architecture and MySQL integration.",
      image: "/projects/noted.png",
      repo: "https://github.com/dzackyahmad-codes/noted-daily-tracker",
      tech: ["Java", "MySQL", "MVC"],
    },
    {
      title: "Task Management CLI",
      role: "Software Developer",
      description:
        "CLI-based task management system implemented in C++ using core data structures with focus mode and task history.",
      image: "/projects/taskmanagement.png",
      repo: "https://github.com/dzackyahmad-codes/task-management",
      tech: ["C++", "Data Structures"],
    },
    {
      title: "Student Well Being Dashboard",
      role: "Backend Developer",
      description:
        "Streamlit-based analytical dashboard applying CRISP-DM and clustering to generate automated insights and actionable recommendations.",
      image: "/projects/studentwb.png",
      repo: "https://github.com/dzackyahmad-codes/student-well-being-analytical-dashboard",
      tech: ["Python", "Streamlit", "Data Mining"],
    },
    {
      title: "Hogwarts Library System",
      role: "Backend Developer",
      description:
        "Web-based library management system featuring authentication, CRUD operations, and MySQL database integration.",
      image: "/projects/hogwarts.png",
      repo: "https://github.com/dzackyahmad-codes/hogwarts-library",
      tech: ["PHP", "CodeIgniter 4", "MySQL"],
    },
    {
      title: "Smart Network for Smart Campus",
      role: "Network Engineer (Simulation)",
      description:
        "Campus-scale network simulation using Cisco Packet Tracer with VLAN, routing, and core network services.",
      image: "/projects/smartnetwork.png",
      repo: "https://github.com/dzackyahmad-codes/smart-network-for-smart-campus",
      tech: ["Cisco", "Networking"],
    },
    {
      title: "HukumPedia Chatbot",
      role: "Project Manager",
      description:
        "Legal chatbot project focused on planning, coordination, and ensuring accurate legal-context information delivery.",
      image: "/projects/hukumpedia.png",
      repo: "https://github.com/dzackyahmad-codes/hukum-pedia",
      tech: ["Project Management", "AI Chatbot"],
    },
    {
      title: "Image Classification",
      role: "Machine Learning Developer",
      description:
        "Personal project comparing custom CNN and pre-trained models for image classification using an end-to-end workflow.",
      image: "/projects/image-classification.png",
      repo: "https://github.com/dzackyahmad-codes/Image-classification",
      tech: ["Python", "CNN", "Transfer Learning", "Computer Vision"],
    },
    {
      title: "AI Content Script Generator",
      role: "Full Stack Developer",
      description:
        "AI-based content script generator handling frontend, backend logic, API workflow, and structured user input processing.",
      image: "/projects/ai-content.png",
      repo: "https://github.com/dzackyahmad-codes/ai-content-maker",
      tech: ["Next.js", "API", "AI Integration", "Full Stack"],
    },
    {
      title: "Google Play Sentiment Analysis",
      role: "Full Stack Developer",
      description:
        "End-to-end sentiment analysis platform using IndoBERTweet with automated Google Play scraping and manual review input.",
      image: "/projects/google-play-sentiment.png",
      repo: "https://github.com/dzackyahmad-codes/google-play-store-sentiment-analysis",
      tech: ["Python", "NLP", "IndoBERTweet", "Sentiment Analysis"],
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          Selected <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-xl overflow-hidden
                         border border-border
                         transition-all duration-300
                         flex flex-col
                         hover:-translate-y-1
                         hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover
                             transition-transform duration-300
                             group-hover:scale-105"
                />

                {/* ROLE BADGE */}
                <span
                  className="absolute top-3 left-3
                             px-4 py-1 text-xs font-semibold
                             rounded-full
                             bg-primary/90 text-white
                             backdrop-blur-sm shadow-md"
                >
                  {project.role}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                                 border border-primary/40
                                 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA – PASTI MUNCUL */}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2
                             px-5 py-2 rounded-full
                             border border-primary text-primary
                             hover:bg-primary hover:text-primary-foreground
                             transition-all duration-300"
                >
                  <Code className="w-4 h-4" />
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
