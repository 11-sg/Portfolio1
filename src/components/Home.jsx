import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-[#021526] min-h-screen flex flex-col mx-auto w-full max-w-full text-[#E2E2B6]">
            <main className="relative flex-grow overflow-hidden rounded-lg sm:mx-16 mx-2 mt-10">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl sm:mt-1 mt-80 space-y-6 text-center sm:text-left">
                        <div className="space-y-2">
                            <h2 className="text-5xl font-extrabold sm:text-7xl tracking-tight text-[#6EACDA]">
                                Sahil Gupta
                            </h2>
                            <div className="h-10">
                                <span className="text-2xl sm:text-3xl text-[#E2E2B6] font-light typewriter-text">
                                    Designer & Developer
                                </span>
                            </div>
                        </div>

                        <p className="text-[#b7cedf] text-lg max-w-lg leading-relaxed">
                            B.Tech Computer Science student at Vellore Institue Of Technology. <br></br>
                            Specializing in secure web applications and AI-driven solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                            <a
                                href="/Sahil_Gupta_Resume.pdf"
                                download="Sahil_Gupta_Resume.pdf"
                                style={{ backgroundColor: '#E2E2B6', color: '#03346E' }}
                                className="inline-flex items-center gap-2 px-8 py-3 font-bold rounded-xl shadow-lg hover:bg-[#6EACDA] hover:text-[#E2E2B6] transition-all duration-300 cursor-pointer text-xl"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-10 h-full flex justify-center sm:justify-end items-start pointer-events-none">
                    <img
                        className="w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-full border-5 border-[#8f0177d0] shadow-2xl shadow-[#6EACDA]/20 pointer-events-auto transition-transform duration-500 hover:scale-105"
                        src="./mine1.jpg"
                        alt="Sahil Gupta"
                    />
                </div>
            </main>

            <div className="bg-[#03346E]/30 py-4 overflow-hidden whitespace-nowrap border-y border-[#6EACDA]/20">

            </div>
        </div>
    );
}