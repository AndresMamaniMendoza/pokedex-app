import { createContext } from 'react';
import React, { useState } from 'react';

const ThemeContext = createContext();
const initialTheme = localStorage.getItem('theme');

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (status) => {
        if (status) {
            localStorage.setItem('theme', 'light');
            setTheme(localStorage.getItem('theme'));
        } else {
            localStorage.setItem('theme', 'dark');
            setTheme(localStorage.getItem('theme'));
        }
    };

    const data = { theme, handleTheme };

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
