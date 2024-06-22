import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation } from "react-router";
import usePokemon from "../../hooks/usePokemon";

const PokemonCard = ({ url }) => {
    const [info, setInfo] = useState(false);
    const { pokemon, loading } = usePokemon(url);
    const $pokemonCard = useRef();
    const $pokemonCardLoader = useRef();
    const $pokemonCardLoaderUp = useRef();
    const $pokemonCardLoaderDown = useRef();
    const location = useLocation();
    const pokemonImage = pokemon?.sprites.other.dream_world.front_default || pokemon?.sprites.other['official-artwork'].front_default || pokemon?.sprites.other.home.front_default || 'https://i.imgur.com/dWukdOq.png';
    const typeClass = (typePokemon => {
        switch (typePokemon) {
            case 'normal':
                return 'PokemonCard__Normal';
            case 'fire':
                return 'PokemonCard__Fire';
            case 'water':
                return 'PokemonCard__Water';
            case 'electric':
                return 'PokemonCard__Electric';
            case 'grass':
                return 'PokemonCard__Grass';
            case 'ice':
                return 'PokemonCard__Ice';
            case 'fighting':
                return 'PokemonCard__Fighting';
            case 'poison':
                return 'PokemonCard__Poison';
            case 'ground':
                return 'PokemonCard__Ground';
            case 'flying':
                return 'PokemonCard__Flying';
            case 'psychic':
                return 'PokemonCard__Psychic';
            case 'bug':
                return 'PokemonCard__Bug';
            case 'rock':
                return 'PokemonCard__Rock';
            case 'ghost':
                return 'PokemonCard__Ghost';
            case 'dragon':
                return 'PokemonCard__Dragon';
            case 'dark':
                return 'PokemonCard__Dark';
            case 'steel':
                return 'PokemonCard__Steel';
            case 'fairy':
                return 'PokemonCard__Fairy';
            case 'shadow':
                return 'PokemonCard__Shadow';
            default:
                return 'PokemonCard__Unknown';
        }
    })(pokemon?.types[0].type.name);

    useEffect(() => {
        if (!loading) $pokemonCard.current.classList.add('PokemonCard__visible');
    }, [loading]);
    
    useEffect(() => {
        if (pokemon) {
            setTimeout(() => {
                $pokemonCardLoader.current.style.animation = 'none';
                $pokemonCardLoaderUp.current.classList.add('PokemonCard__loader__open__up');
                $pokemonCardLoaderDown.current.classList.add('PokemonCard__loader__open__down');
            }, 2000);
        }
    },[pokemon])

    return (
        <>
            {loading && <div className="PokemonCard__loading">
                <div ref={$pokemonCardLoader} className="PokemonCard__loader">
                    <div ref={$pokemonCardLoaderUp} className="PokemonCard__loader__up">
                        <div className="PokemonCard__loader__pin">
                            <div className="PokemonCard__loader__subpin"></div>
                        </div>
                    </div>
                    <div ref={$pokemonCardLoaderDown} className="PokemonCard__loader__down"></div>
                </div>
            </div>}
            {!loading && <article ref={$pokemonCard} className={`PokemonCard ${typeClass}`}>
                <h2 className="PokemonCard__title" onClick={e => setInfo(true)} title={`Ver ${pokemon?.name}`}>{pokemon?.name}</h2>
                <div className="PokemonCard__container">
                    <ul className="PokemonCard__ListStats">
                        <li className="PokemonCard__ItemStat"><span>Tipo:</span> {pokemon?.types.map(type => type.type.name).join(', ')}</li>
                        {pokemon?.stats.map(stat => <li className="PokemonCard__ItemStat" key={stat.stat.name}><span>{stat.stat.name.replace(stat.stat.name[0], stat.stat.name[0].toUpperCase())}:</span> {stat.base_stat}</li>)}
                    </ul>
                    <div className="PokemonCard__ContainerImg">
                        <img src={pokemonImage} alt={pokemon?.name} />
                        <div className="PokemonCard_Pokeball">
                            <div className="PokemonCard_Pokeball_rectangle"></div>
                        </div>
                    </div>
                </div>
                {info && <Navigate to={`/pokedex/${pokemon?.id}`} state={{ pokemon, pokemonImage, typeClass, location: location.pathname}} />}
            </article>}
        </>
    )
}

export default PokemonCard