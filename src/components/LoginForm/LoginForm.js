import React from 'react';
// *************************
import './LoginForm.scss';

const LoginForm = ({inputChangeHandler, submitHandler}) => {

    return(
        <React.Fragment>
            <div className='form-group'>
                {/*<label htmlFor="login-email">Email</label>*/}
                <input type="email"
                       name='email'
                       id='login-email'
                       placeholder='Email'
                       className='group-input'
                       onChange={inputChangeHandler}
                />
            </div>
            <div className="form-group">
                {/*<label htmlFor="login-password">Password</label>*/}
                <input type="password"
                       name='password'
                       id='login-password'
                       placeholder='Password'
                       className='group-input'
                       onChange={inputChangeHandler}
                />
            </div>
            <div className="form-group">
                <button className="bt bt-success" onClick={() => {
                    submitHandler();
                }}>Sing In</button>
            </div>
        </React.Fragment>
    )
};

export default LoginForm;

