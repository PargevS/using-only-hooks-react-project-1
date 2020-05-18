import React from 'react';
// *************************
import './FormErrorMessages.scss';

const FormErrorMessages = ({errors}) => {
    console.log(errors);
    const errorMessages = errors ? Object.keys(errors).map(key => {
        let messages = null;
        if(Array.isArray(errors[key])){
            messages = errors[key].join(' ');
        }else {
            messages = errors[key][Object.keys(errors[key])];
        }
        return {[key]: messages}
    }) : null;

    return (
        <ul className='errors-list'>
            {
                errorMessages.map(message => {
                    const key = Object.keys(message)[0];
                    return <li key={key}>{key} - {message[key]}</li>
                })
            }
        </ul>
    );
};

export default FormErrorMessages;
