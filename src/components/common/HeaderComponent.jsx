import React, { useContext } from 'react';
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';

function FooterComponent() {
    const navigate = useNavigate();

    const loginPage = () => {
        navigate("/login")
    }

    const pokedexPage = () => {
        navigate("/pokedex")
    }

    const favoritesPage = () => {
        navigate("/favorite")
    }

    const data = useContext(ThemeContext);

    function handleThemeLight() {
        return data.handleTheme
    }

    function handleThemeDark() {
        return data.handleTheme
    }

    return (
        <div className={data.theme}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h6">Application</Typography>
                    <Button color="inherit" onClick={() => loginPage()}>
                        Login
                    </Button>
                    <Button color="inherit" onClick={() => favoritesPage()}>
                        Favorites
                    </Button>
                    <Button color="inherit" onClick={() => pokedexPage()}>
                        Pokedex
                    </Button>
                    <input type="radio" name="theme" id="light" onClick={handleThemeLight()} value="light" />
                    <label htmlFor='light'>Light</label>
                    <input type="radio" name="theme" id="dark" onClick={handleThemeDark()} value="dark" />
                    <label htmlFor='dark'>Dark</label>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default FooterComponent;