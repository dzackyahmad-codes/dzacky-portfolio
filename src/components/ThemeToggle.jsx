import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";

    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={cn(
        // POSITION
        "fixed bottom-6 right-6 z-50",

        // STYLE
        "p-3 rounded-full bg-card border border-border",
        "shadow-lg backdrop-blur-md",

        // ANIMATION
        "transition-all duration-300 hover:scale-110 hover:shadow-xl",

        // FOCUS
        "focus:outline-none focus:ring-2 focus:ring-primary/50",

        // OPTIONAL: hide on very small screens
        "max-sm:hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-500" />
      )}
    </button>
  );
};
