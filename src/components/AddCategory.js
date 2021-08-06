import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // .trim() quita los espacios vacios del principio y el final
        if(inputValue.trim().length > 2){
            // No tengo el acceso a las categories, por eso la llamo como arrowF
            setCategories( cate => [inputValue, ...cate]); 
            // Para que no haga un doble posteo 
            setInputValue('');
        }
    };

    return (
        <form onSubmit={ handleSubmit }> 
            <input
                type='text'
                value= {inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

// Es requerido el setCategories
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
