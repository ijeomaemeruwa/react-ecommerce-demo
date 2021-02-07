import React from 'react';
import './forminput.css';


const FormInput = ({ ...otherInputProps }) => {
    return (
    <div className="user_form">
    <input 
        className="input_group"
        {...otherInputProps}
    />
    </div>
    )
}

export default FormInput;
