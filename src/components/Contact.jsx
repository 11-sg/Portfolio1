import React from 'react'

function Contact() {
  const links = [
    { 
        name: "Email", 
        value: "officialwork.sahil.gupta@gmail.com", 
        href: "mailto:officialwork.sahil.gupta@gmail.com",
        color: "group-hover:text-cyan-400" 
    },
    { 
        name: "LinkedIn", 
        value: "sahilgupta", 
        href: "https://www.linkedin.com/in/sahil-gupta-4a7b8b230/",
        color: "group-hover:text-violet-400"
    },
    { 
        name: "GitHub", 
        value: "Sahil Gupta", 
        href: "https://github.com/11-sg",
        color: "group-hover:text-pink-400"
    }
  ];

  return (
    <div className="bg-[#0B0118] min-h-screen pt-24 pb-32 px-4 text-[#F9FAFB]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl font-black mb-6 bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent animate-gradient-x">
          Let's Talk.
        </h1>
        <p className="text-xl mb-16 text-slate-400 font-light tracking-wide">
            Available for freelance, full-time roles, or just a coffee chat.
        </p>
        
        <div className="grid grid-cols-1 gap-4">
          {links.map((link, i) => (
            <a 
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden p-8 bg-[#1A0B2E] border border-violet-500/10 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:border-violet-500/40"
            >
              {/* Animated Background Glow */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-violet-500/5 to-transparent group-hover:animate-shimmer pointer-events-none" />
              
              <div className="relative flex justify-between items-center">
                <div className="text-left">
                  <p className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.2em] mb-2">{link.name}</p>
                  <p className={`text-xl sm:text-3xl font-semibold transition-colors duration-300 ${link.color}`}>
                    {link.value}
                  </p>
                </div>
                <div className="text-slate-600 group-hover:text-[#8B5CF6] transition-all duration-300 translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
            <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                Lucknow, India 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Contact