import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import LoginPage from '../pages/login/LoginPage';
import FavoritePage from '../pages/favorite/FavoritePage';
import PokedexPage from '../pages/pokedex/PokedexPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeContext from '../context/ThemeContext';

function Router() {
    const data = useContext(ThemeContext);

    return (
        <div className={data.theme}>
            <ThemeProvider>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/favorite" element={<FavoritePage />} />
                    <Route path="/pokedex" element={<PokedexPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default Router;