import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2) {
            setCategories( c => [inputValue, ...c]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={ (e) => setInputValue( e.target.value ) }
            placeholder='Ingrese una categoria para su busqueda de gifts :)'
            
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
