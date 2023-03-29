import { createContext } from 'react';
import React, { useState } from 'react';

const ThemeContext = createContext();
const initialTheme = localStorage.getItem('theme');

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (status) => {
        

        if (status) {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    const data = { theme, handleTheme };

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
