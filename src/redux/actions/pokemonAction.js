export function addPokemonToFavoritesAction(pokemon) {
    return { type: "ADD_POKEMON_TO_FAVORITES", payload: pokemon };
};

export const removePokemonFromFavoritesAction = (pokemonId) => ({
    type: "REMOVE_POKEMON_FROM_FAVORITES", payload: pokemonId }
);