export default function pokemonReducer(state = [], action) {
    switch (action.type) {
        case "ADD_POKEMON_TO_FAVORITES":
            if (state.some((pokemon) => pokemon.id === action.payload.id)) {
                return state;
            }
            return [...state, action.payload];

        case "REMOVE_POKEMON_FROM_FAVORITES":
            return state.filter((pokemon) => pokemon.id !== action.payload);
            
        default:
            return state;
    }
}