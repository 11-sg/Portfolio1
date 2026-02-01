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
                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
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