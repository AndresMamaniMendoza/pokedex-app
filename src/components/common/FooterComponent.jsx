import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import ThemeContext from '../../context/ThemeContext';

function HeaderComponent() {
    const data = useContext(ThemeContext);
    return (
        <div className={data.theme}>
            <AppBar position="static" color="secondary" >
                <Toolbar>
                    <a href="https://www.facebook.com/JalasoftLatam/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <Facebook />
                    </a>
                    <Typography variant="subtitle1">Copyright Andres Mamani</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default HeaderComponent;