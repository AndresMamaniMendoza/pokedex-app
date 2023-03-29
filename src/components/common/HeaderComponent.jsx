import React, { useContext, useState } from 'react';
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import Switch from '@material-ui/core/Switch';

function HeaderComponent() {
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
    const [checked, setChecked] = useState(false);

    const handleThemeToggle = () => {
        data.handleTheme(checked);
        setChecked(!checked);
    };

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
                    <Switch
                        checked={checked}
                        onChange={handleThemeToggle}
                        name="theme-switch"
                        color="primary"
                        inputProps={{ 'aria-label': 'switch theme' }}
                    />
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default HeaderComponent;