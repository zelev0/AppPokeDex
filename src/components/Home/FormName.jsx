import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setGlobalUser } from '../../store/reducers/userName';
import './FormName.css';

const FormName = () => {
    const dispatch = useDispatch();
    const [inputFocus, setInputFocus] = useState(false);
    const initialForm = {
        username: ''
    }
    
    const validateInput = (valueInput, nameInput) => {
        const errorsProcess = JSON.parse(JSON.stringify(errors));
        const regexpName = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü]{4,15}$/;

        if (!valueInput) {
            errorsProcess.username = 'Debes ingresar tu nombre para continuar!'
        } else if (!regexpName.test(valueInput)) {
            errorsProcess.username = 'El nombre solo debe contener letras y números. Mínimo 4 y máximo 15 carácteres'
        } else {
            delete errorsProcess[nameInput]
        }

        return errorsProcess
    }

    const actionForm = form => {
        dispatch(setGlobalUser(form.username.value));
    }

    const { form, errors, handlerChange, handlerSubmit } = useForm(initialForm, validateInput, actionForm);

    useEffect(() => {
        
    })

    return (
        <form
            onSubmit={handlerSubmit}
            className="Home_FormName"
            autoComplete='off'
        >
            <input
                type="text"
                name="username"
                placeholder='Escribe tu nombre'
                value={form.username}
                onChange={handlerChange}
                onFocus={e => setInputFocus(true)}
                onBlur={e => setInputFocus(false)}
                className='FormName__input'
            />
            {inputFocus && errors.username && <p className='FormName__Error'>{errors.username}</p>}
            <input
                type="submit" value="Comenzar aventura"
                className='FormName__input FormName__input--submit'
                title='Registrar nombre'
            />
        </form>
    )
}

export default FormName