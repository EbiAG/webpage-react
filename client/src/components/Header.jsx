import React from 'react';
import ThemeToggle from './ThemeToggle'; //Import the ThemeToggle Component


const Header = () => {
    return (
        <header>
            <nav className="bg-primaryLight dark:bg-primaryDark dark:text-white fixed top-0 w-full z-50">
                 <div className="container mx-auto flex justify-between items-center p-4">
                    <div className='flex items-center'>
                        {/* Mobile Menu Button - can add later when required*/}
                        <div className="lg:hidden mr-4">
                        <button className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h10" />
                            </svg>
                        </button>
                        </div>
                        {/* Logo and Brand */}
                        <a href="/" className="flex items-center text-2xl font-semibold">
                            <img src="/imgs/TypographicIcon.svg" alt="Logo" className="h-12 w-12 mr-2 hidden sm:block text-white dark:invert" />
                            <span className='hidden sm:inline-block hover:text-secondaryLight dark:hover:text-secondary'>Ebi Antony George</span>
                        </a>
                    </div>


                    {/* Navigation Links */}
                    <div className="hidden lg:flex space-x-6">
                        <a href="/about" className="hover:text-secondaryLight dark:hover:text-secondary">About</a>
                        <a href="/projects" className="hover:text-secondaryLight dark:hover:text-secondary">Projects</a>
                        <a href="/publications" className="hover:text-secondaryLight dark:hover:text-secondary">Publications</a>
                        <a href="/interests" className="hover:text-secondaryLight dark:hover:text-secondary">Interests</a>
                    </div>

                     {/* Theme Toggle and Social Icons - REMOVED */}

                    <div className='flex items-center space-x-4'>
                        <a href="mailto:ebi.antony.george@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondaryLight dark:hover:text-secondary">
                            <i className="fas fa-envelope" ><span className="sr-only">Email Me</span></i>
                        </a>
                        <ThemeToggle/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;