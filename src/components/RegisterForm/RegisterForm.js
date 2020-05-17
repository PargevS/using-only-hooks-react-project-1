import React from 'react';
// *************************
import './RegisterForm.scss';

const RegisterForm = ({inputChangeHandler, submitHandler}) => {
    return (
        <React.Fragment>
            <div className="form-group">
                {/*<label htmlFor="register-name">Name</label>*/}
                <input type="text"
                       name='username'
                       id='register-name'
                       placeholder='Your Name'
                       className='group-input'
                       onChange={inputChangeHandler}
                />
            </div>
            <div className="form-group">
                {/*<label htmlFor="register-email">Email</label>*/}
                <input type="email"
                       name='email'
                       id='register-email'
                       placeholder='Your Email'
                       className='group-input'
                       onChange={inputChangeHandler}
                />
            </div>
            <div className="form-group">
                {/*<label htmlFor="register-password">Password</label>*/}
                <input type="password"
                       name='password'
                       id='register-password'
                       placeholder='Password'
                       className='group-input'
                       onChange={inputChangeHandler}
                />
            </div>
            <div className="form-group">
                <button className="bt bt-success" onClick={submitHandler}>Sing up</button>
            </div>
        </React.Fragment>
    );
};

export default RegisterForm;
