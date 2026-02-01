import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="fixed bottom-6 z-50 w-full flex justify-center px-4">
            <nav 
                style={{ backgroundColor: '#360185' }} 
                className="backdrop-blur-xl border border-[#8F0177]/30 shadow-2xl rounded-2xl px-6 py-3 max-w-fit"
            >
                <div className="flex justify-center items-center">
                    <div className="flex justify-between items-center w-auto">
                        <ul className="flex flex-row space-x-6 sm:space-x-10 font-medium items-center">
                            <li>
                                <NavLink
                                    to="/"
                                    style={({ isActive }) => ({
                                        color: isActive ? '#F4B342' : '#DE1A58'
                                    })}
                                    className={({ isActive }) =>
                                        `text-sm tracking-wide transition-all duration-300 hover:opacity-80 ${
                                            isActive ? "scale-110 font-bold" : ""
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    style={({ isActive }) => ({
                                        color: isActive ? '#F4B342' : '#DE1A58'
                                    })}
                                    className={({ isActive }) =>
                                        `text-sm tracking-wide transition-all duration-300 hover:opacity-80 ${
                                            isActive ? "scale-110 font-bold" : ""
                                        }`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/project"
                                    style={({ isActive }) => ({
                                        color: isActive ? '#F4B342' : '#DE1A58'
                                    })}
                                    className={({ isActive }) =>
                                        `text-sm tracking-wide transition-all duration-300 hover:opacity-80 ${
                                            isActive ? "scale-110 font-bold" : ""
                                        }`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    style={({ isActive }) => ({
                                        color: isActive ? '#F4B342' : '#DE1A58'
                                    })}
                                    className={({ isActive }) =>
                                        `text-sm tracking-wide transition-all duration-300 hover:opacity-80 ${
                                            isActive ? "scale-110 font-bold" : ""
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}