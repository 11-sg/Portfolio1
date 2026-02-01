import React from 'react'

function About() {
  return (
    <div className="bg-[#021526] min-h-screen pt-24 pb-32 px-4 sm:px-6 lg:px-8 text-[#E2E2B6]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 border-b border-[#6EACDA]/20 pb-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#6EACDA] mb-4">About Me</h1>
          <p className="text-xl text-[#E2E2B6]/80 max-w-3xl leading-relaxed">
            I am a Computer Science student at VIT with a focus on building secure, 
            scalable web applications and exploring the intersection of AI and human interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Education & Skills */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-[#6EACDA] mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#6EACDA]"></span> Education
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-[#03346E]">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#6EACDA]"></div>
                  <h3 className="text-lg font-bold">Vellore Institute Of Technology</h3>
                  <p className="text-sm text-[#6EACDA]">2023 – 2027 | B.Tech CSE</p>
                  <p className="mt-2 text-zinc-400">CGPA: 8.98 / 10</p>
                </div>
                <div className="relative pl-6 border-l-2 border-[#03346E]">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#03346E]"></div>
                  <h3 className="text-lg font-bold">City Montessori School</h3>
                  <p className="text-sm text-[#6EACDA]">2007 – 2023</p>
                  <p className="mt-2 text-zinc-400">Class XII: 97.83% | Class X: 97.67%</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#6EACDA] mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#6EACDA]"></span> Technical Toolkit
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Java', 'Python', 'C++', 'React JS', 'Node.js', 'MongoDB', 'MySQL', 'Tailwind', 'Git'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#03346E] border border-[#6EACDA]/30 rounded-lg text-sm font-medium hover:border-[#E2E2B6] transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Experience & Achievements */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-[#6EACDA] mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#6EACDA]"></span> Experience
              </h2>
              <div className="bg-[#03346E]/30 p-6 rounded-2xl border border-[#6EACDA]/10">
                <h3 className="text-lg font-bold text-[#E2E2B6]">GSSoC’24 Contributor</h3>
                <p className="text-sm text-[#6EACDA] mb-3">Sept. 2024</p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2 text-sm">
                  <li>Contributed to 2 open source healthcare projects.</li>
                  <li>Focused on frontend optimization and UI accessibility.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#6EACDA] mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#6EACDA]"></span> Recognition
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#E2E2B6] rounded-lg text-[#021526]">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <p className="text-sm leading-relaxed">CISCE Council Scholarship Awardee for academic excellence.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#E2E2B6] rounded-lg text-[#021526]">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"/></svg>
                  </div>
                  <p className="text-sm leading-relaxed">2nd Place Winner: SmarTEN Science Video Contest.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#6EACDA] mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#6EACDA]"></span> Beyond Coding
              </h2>
              <p className="text-zinc-400 text-sm italic">
                Art Enthusiast, Painter, and Trekker. I believe creativity in art fuels 
                creative logic in programming.
              </p>
            </section>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About