"use client"

import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      name: "Portfolio Website",
      languages: "React · TypeScript · Next.js",
      description: "The website that you're looking at right now.",
      github: "https://github.com/silverb1/portfolio-website",
    },
    {
      name: "Wishlist App",
      languages: "React · TypeScript · Next.js",
      description: "Gift wishlist application frontend using React and Next.js.",
      github: "https://github.com/silverb1/wishlist-app",
    },
  ]

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Animated celestial background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-celestial-dark via-celestial-space to-celestial-deeper" />

        {/* Animated stars */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.3,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
                animationDelay: Math.random() * 2 + "s",
              }}
            />
          ))}
        </div>

        {/* Animated nebula glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-accent-alt/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex items-center p-8 md:p-30">
        {/* Left column */}
        <div className="w-2/3 flex flex-col justify-center pr-8">
          {/* Name */}
          <h1
            className={`text-6xl md:text-7xl font-bold text-primary mb-2 transition-all duration-1000 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Brennan Silver
          </h1>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-secondary mb-8 leading-relaxed max-w-md transition-all duration-1000 transform delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            I'm a 19 year old developer from Colorado who enjoys gaming, music, and experimenting with new design techniques. I take a very detail-oriented approach, and I'm passionate about clean code, performance
            optimization, and user-centered design.
          </p>

          {/* <h2 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
            Proficient in:
          </h2> */}

          {/* Skills */}
          <div
            className={`flex flex-wrap gap-3 transition-all duration-1000 transform delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {["Python", "Java", "C++", "C#", "React", "TypeScript", "Node.js"].map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 rounded-lg border border-accent/30 text-secondary hover:border-accent/60 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Projects */}
        <div className="w-1/2 flex flex-col gap-4 pl-4">
          <h2
            className={`text-3xl md:text-3xl font-bold text-primary mb-2 transition-all duration-1000 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Projects
          </h2>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:bg-white/5 group cursor-pointer transition-all duration-1000 transform delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-accent mb-3">{project.languages}</p>
              <p className="text-secondary text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .delay-150 {
          transition-delay: 150ms;
        }

        .delay-300 {
          transition-delay: 300ms;
        }

        .delay-500 {
          transition-delay: 500ms;
        }

        .delay-700 {
          transition-delay: 700ms;
        }
      `}</style>
    </div>
  )
}
