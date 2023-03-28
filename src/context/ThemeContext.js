import { createContext } from 'react';
import React, { useState } from 'react';

const ThemeContext = createContext();
const initialTheme = 'light';

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (e) => {
        if (e.target.value === 'light') {
            setTheme(localStorage.getItem('theme'));
            localStorage.setItem('theme', 'light');
        } else {
            setTheme(localStorage.getItem('theme'));
            localStorage.setItem('theme', 'dark');
        }
    };

    const data = { theme, handleTheme };

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
