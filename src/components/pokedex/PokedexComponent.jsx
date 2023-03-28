import useCounter from '../../hooks/useCounter';
import ButtonComponent from '../../components/common/ButtonComponent';
import React, { useEffect } from 'react';
import { useFetchPokemonById } from '../../API/pokemonAPI';
import PokemonCardComponent from '../../components/PokemonCard/PokemonCardComponent';
import '../../App.css';

function PokedexComponent() {
    const [count, increment, decrement] = useCounter(1, 1, 1, 151);
    const { pokemon, loading, weaknesses, stats, pokemonType, fetchPokemonById } = useFetchPokemonById(count);

    useEffect(() => {
        fetchPokemonById();
    }, [count]);

    return (
        <div className="App2">
            <div>
                <ButtonComponent onClick={decrement} text={'<<'} />
            </div>
            {loading && <p>Loading...</p>}
            {!loading && pokemon && (
                <div>
                    <PokemonCardComponent
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        weight={pokemon.weight}
                        abilities={pokemon.abilities.map(item => (item.ability.name))}
                        weaknesses={weaknesses.map(weakness => (weakness.name))}
                        type={pokemonType}
                        stats={stats}
                    />
                </div>
            )}
            <div>
                <ButtonComponent onClick={increment} text={'>>'} />
            </div>
        </div>
    );
}

export default PokedexComponent;