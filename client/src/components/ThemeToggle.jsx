import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  // using useState to hold the theme. Set the initial theme by checking local storage or defaulting to dark if none is present

  useEffect(() => {
    localStorage.setItem('theme', theme); // sets the theme in local storage
    if (theme === 'dark') {
      document.body.classList.add('dark'); // adds dark class to body tag
    } else {
      document.body.classList.remove('dark'); // removes dark class from the body tag
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark'); // toggles the theme and updates the useState
  };

  return (
    <div className="inline-flex mx-0">
    <button
        aria-label={theme === 'light' ? 'Enable dark theme' : 'Enable light theme'}
        aria-pressed={theme === 'dark'}
        role="switch"
        type="button"
        className="theme-button btn hover:text-secondaryLight dark:hover:text-secondary"
        onClick={handleThemeToggle}
    >
        {theme === 'light' ?
            <i className="fas fa-moon" aria-hidden="True" title="Dark Theme Button"><span className="sr-only">Dark Theme Button</span></i> :
            <i className="fas fa-sun" aria-hidden="True" title="Light Theme Button"><span className="sr-only">Light Theme Button</span></i>
            }
    </button>
  </div>
  );
};

export default ThemeToggle;