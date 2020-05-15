import React from 'react';
// *************************
import './AuthFormWrap.scss';

const AuthFormWrap = ({children}) => {
    return (
        <div className='auth-form'>
            {children}
        </div>
    );
};

export default AuthFormWrap;
