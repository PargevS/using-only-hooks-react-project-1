import React from 'react';
// *************************
import './RegisterForm.scss';

const RegisterForm = ({inputChangeHandler, submitHandler}) => {
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="register-name">Name</label>
                <input type="text"
                       name='name'
                       id='register-name'
                       className='group-input'
                       onChange={inputChangeHandler}
                />
            </div>
            <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input type="email"
                       name='email'
                       id='register-email'
                       className='group-input'
                       onChange={inputChangeHandler}
                />
            </div>
            <div className="form-group">
                <label htmlFor="register-password">Password</label>
                <input type="password"
                       name='password'
                       id='register-password'
                       className='group-input'
                       onChange={inputChangeHandler}
                />
            </div>
            <div className="form-group">
                <label htmlFor="register-password-confirm">Confirm password</label>
                <input type="password"
                       name='password-confirm'
                       id='register-password-confirm'
                       className='group-input'
                       onChange={inputChangeHandler}
                />
            </div>
            <div className="form-group">
                <button className="bt bt-success" onClick={submitHandler}>Register</button>
            </div>
        </React.Fragment>
    );
};

export default RegisterForm;
