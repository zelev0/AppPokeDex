import Home from './components/Home/Home'
import Pokedex from './components/Pokedex/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router'
import PokemonScreen from './components/PokemonScreen/PokemonScreen'
import { getPokemons } from './store/reducers/viewPokemons.slice'
import { useEffect } from 'react'
import { getTypes } from './store/reducers/typesPokemons.slice'
import PokemonInfo from './components/PokemonScreen/PokemonInfo'
import PokemonInfoInfo from './components/PokemonScreen/PokemonInfoInfo'
import { getEvolutionTriggers } from './store/reducers/evolutionTriggers.slice'

function App() {
  const userName = useSelector(store => store.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154', true));
    dispatch(getTypes());
    dispatch(getEvolutionTriggers());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home userName={userName} />} />
        <Route element={<ProtectedRoutes userName={userName} />}>
          <Route path='/pokedex' element={<Pokedex userName={userName} />} />
          <Route path='/pokedex/:id' element={<PokemonScreen />}>
            <Route index element={<PokemonInfoInfo />} />
            <Route path=':info' element={<PokemonInfo/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
