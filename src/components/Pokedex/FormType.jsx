import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setGlobalFilterPokemon } from '../../store/reducers/filterPokemons.slice';
import { getPokemons, setGlobalViewPokemons } from '../../store/reducers/viewPokemons.slice';
import './FormType.css';

const FormType = ({ setViewType, setViewForms, setCurrentPage }) => {
    const dispatch = useDispatch();
    const $form = useRef();
    const $select = useRef();
    const pokemons = useSelector(store => store.pokemons);
    const type = useSelector(store => store.filterPokemons);
    const types = useSelector(store => store.typesPokemons);

    const { form, handlerChange } = useForm({ type: type || 'Todos' }, () => ({}));

    useEffect(() => {
        setTimeout(() => $form.current.classList.add('getInType'), 0);


        const viewType = (e) => {
            if (e.target === $select.current) {
                $form.current.classList.remove('getInType');
                setTimeout(setViewForms, 300, false);
            }
        };

        document.addEventListener('change', viewType);

        return () => document.removeEventListener('change', viewType);
    }, []);

    useEffect(() => {
        const loadType = e => {
            if (e.target === $select.current) {
                const type = types.find(el => el.name === form.type);
                dispatch(setGlobalFilterPokemon(form.type));


                $select.current.blur();
                if (type) {
                    if (type.name === 'Todos') {
                        dispatch(setGlobalViewPokemons(pokemons));
                    } else {
                        dispatch(getPokemons(type.url))
                    }
                }
                setCurrentPage(1);
            }
        }

        document.addEventListener('change', loadType);

        return () => document.removeEventListener('change', loadType);
    }, [form]);
    
    return (
        <>
            <form className="FormType" ref={$form}>
                <h2 className='FormType__title'>Tipos de pokemon</h2>
                <button type='button'
                    className='FormType__btnClose'
                    onClick={e => {
                        $form.current.classList.remove('getInType');
                        setTimeout(setViewType, 300, false);
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <select
                    ref={$select}
                    name="type"
                    value={form.type}
                    onChange={handlerChange}
                    className='FormType__select'
                >
                    {types.map(type => <option
                        key={type.url}
                        value={type.name}
                    >{type.name}
                    </option>)}
                </select>
            </form>
        </>
    )
}

export default FormType