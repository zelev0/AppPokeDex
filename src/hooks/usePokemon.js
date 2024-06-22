import axios from "axios";
import { useEffect, useState } from "react"

const usePokemon = url => {
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                res.data.name = res.data.name.replace(res.data.name[0], res.data.name[0].toUpperCase());
                setPokemon(res.data);
                setTimeout(setLoading, 2300, false);
            })
            .catch(err => console.log(err))
    }, []);
    
    return {pokemon, loading};
}

export default usePokemon;