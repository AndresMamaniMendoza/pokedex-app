import React, { useContext } from 'react';
import PokemonList from '../../components/pokemonList/PokemonListComponent';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ThemeContext from '../../context/ThemeContext';

function FavoritePage({ favorite }) {

    const data = useContext(ThemeContext);

    return (
        <div className={data.theme}>
            <div>
                <PokemonList
                    pokemonList={favorite}
                />
            </div>
        </div>
    );
}

FavoritePage.propTypes = {
    favorite: PropTypes.array
}

function mapStateToProps(state) {
    return {
        favorite: state,
    };
}

export default connect(mapStateToProps)(FavoritePage);