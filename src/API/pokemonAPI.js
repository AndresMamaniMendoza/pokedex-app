
import { useState } from 'react';

const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;

export function useFetchPokemonById(id) {
    const [pokemon, setPokemon] = useState({ sprites: {}, weight: 0, abilities: [] });
    const [loading, setLoading] = useState(false);
    const [weaknesses, setWeaknesses] = useState([]);
    const [stats, setStats] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);

    const fetchPokemonById = () => {
        setLoading(true);

        fetch(`${pokeApiDomain}${id}`)
            .then(response => response.json())
            .then((data) => {
                setPokemon(data);
                setPokemonType(data.types.map((type) => type.type.name));

                const typeUrls = data.types.map(type => type.type.url);
                typeUrls.map((url) => fetch(url)
                    .then((r) => r.json())
                    .then((res) => setWeaknesses(res.damage_relations.double_damage_from)));

                setStats(data.stats);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    };

    return {
        pokemon,
        loading,
        weaknesses,
        stats,
        pokemonType,
        fetchPokemonById,
    };
}

