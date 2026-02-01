import React from 'react'

function Project() {
  const projectList = [
    {
      title: "Sign Language Detection",
      date: "Jan 2025 – April 2025",
      tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
      description: [
        "Real-time sign language detection using computer vision.",
        "Utilized MediaPipe for hand landmark tracking.",
        "Custom model deployed for instant text output."
      ],
      link: "https://github.com/11-sg/SignLanguage",
      bgImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070" 
    },
    {
      title: "BookVault - Library Management",
      date: "Sept 2024 – Dec 2024",
      tech: ["Node.js", "Express", "MongoDB", "React"],
      description: [
        "Full-stack secure web app with real-time book search.",
        "Admin portal for user management and borrow history.",
        "Integrated AI chatbot for user support."
      ],
      link: "https://github.com/11-sg/Book_Vault",
      bgImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070"
    },
    {
      title: "Rightly – AI Legal Assistant",
      date: "May 2024 – June 2024",
      tech: ["Python" , "PyQt5", "LLMs", "NLP", "Web Scraping", "Speech Recognition"],
      description: [
        "Designed and implemented a voice-controlled AI system.",
        "Built modular backend components for chatbot logic and live search."
      ],
      link: "https://github.com/11-sg/Rightly",
      bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070"
    }
  ];

  return (
    <div className="bg-[#021526] min-h-screen pt-24 pb-32 px-4 sm:px-6 lg:px-8 text-[#E2E2B6]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 border-b border-[#6EACDA]/20 pb-8 flex flex-col sm:flex-row justify-between items-end gap-4">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#6EACDA] mb-4">Projects</h1>
            <p className="text-xl text-[#E2E2B6]/70">Building solutions with code and creativity.</p>
          </div>
          <a 
            href="https://github.com/11-sg" 
            target="_blank" 
            rel="noreferrer"
            className="text-[#E2E2B6] hover:text-[#6EACDA] transition-colors flex items-center gap-2 font-bold bg-[#03346E] px-4 py-2 rounded-lg border border-[#6EACDA]/30"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundImage: `url(${project.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className="group relative overflow-hidden p-8 rounded-3xl min-h-[400px] flex flex-col justify-end border border-[#6EACDA]/20 hover:border-[#E2E2B6] transition-all duration-500"
            >

              <div className="absolute inset-0 bg-[#021526]/85 group-hover:bg-[#021526]/70 transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-[#6EACDA] mb-4 drop-shadow-lg">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-[#03346E] text-[#6EACDA] rounded border border-[#6EACDA]/30">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-8 text-sm text-[#E2E2B6]/90">
                  {project.description.map((desc, i) => (
                    <li key={i} className="flex gap-2"><span className="text-[#6EACDA] font-bold">•</span> {desc}</li>
                  ))}
                </ul>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full text-center py-3 rounded-xl bg-[#E2E2B6] text-[#021526] font-bold hover:bg-[#6EACDA] hover:text-[#E2E2B6] transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project