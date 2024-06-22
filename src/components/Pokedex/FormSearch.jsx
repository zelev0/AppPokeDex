import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setGlobalViewPokemons } from '../../store/reducers/viewPokemons.slice';
import './FormSearch.css';

const FormSearch = ({setSearch, setViewSearch, setViewForms}) => {
    const $form = useRef();
    const [inputFocus, setInputFocus] = useState();
    const pokemons = useSelector(store => store.pokemons);
    const dispatch = useDispatch();

    const validateInput = (valueInput, nameInput, errorsState) => {
        const regexpSearch = /^[A-Za-z-]{4,40}$/;

        if (!valueInput) {
            errorsState[nameInput] = 'Debes ingresar un nombre'
        } else if (!regexpSearch.test(valueInput)) {
            errorsState[nameInput] = 'Debe contener minimo 4 y máximo 40 caracteres (letras y/o guión)';
        } else {
            delete errorsState[nameInput]
        }

        return errorsState
    }

    const actionForm = (form, formState) => {
        dispatch(setGlobalViewPokemons(pokemons.filter(el => new RegExp(formState.searchName, 'i').test(el.name))));
        setSearch(formState.searchName);
        $form?.current.classList.remove('getInType');
        setTimeout(setViewForms, 300, false);
    }

    const { form, errors, handlerChange, handlerSubmit } = useForm({ searchName: '' }, validateInput, actionForm);

    useEffect(() => {
        setTimeout(() => {
            $form.current.classList.add('getInType');
        }, 0);

        setTimeout(() => {
            $form.current.searchName.focus();
        }, 300);
    },[])

    return (
        <form className="FormSearch" onSubmit={handlerSubmit} ref={$form} autoComplete="off">
            <button type='button'
                className='FormSearch__btnClose'
                onClick={e => {
                    $form.current.classList.remove('getInType');
                    setTimeout(setViewSearch, 300, false);
                }}
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="FormSearch__container">
                <input
                    type="search"
                    name="searchName"
                    value={form.searchName}
                    placeholder="Busca un pokemón"
                    className='FormSearch__input'
                    onChange={handlerChange}
                    onFocus={() => setInputFocus(true)}
                    onBlur={()=>setInputFocus(false)}
                />
                <button
                    type='submit' className='FormSearch__submit'
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            {inputFocus && errors.searchName && <p className='FormSearch__error'>{errors.searchName}</p>}
        </form>
    )
}

export default FormSearch