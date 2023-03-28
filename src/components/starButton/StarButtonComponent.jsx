import { IconButton } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { useDispatch } from 'react-redux';
import * as pokemonActions from '../../redux/actions/pokemonAction';
import React from 'react';

import { useSelector } from "react-redux";


export default function StarButton({ pokemon }) {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.store);
    const isFavorite = favorites.some((fav) => fav.id === pokemon.id);

    function handleClick() {
        if (isFavorite) {
            dispatch(pokemonActions.removePokemonFromFavoritesAction(pokemon.id));
        } else {
            dispatch(pokemonActions.addPokemonToFavoritesAction(pokemon));
        }
    }

    return (
        <IconButton onClick={handleClick}>
            <StarIcon color={isFavorite ? "secondary" : "inherit"} />
        </IconButton>
    );
}