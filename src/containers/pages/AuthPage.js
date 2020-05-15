import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import AuthFormWrap from "../../components/UI/AutFormWrap";
// *************************

const AuthPage = () => {
    const history = useHistory();
    const pathName = history.location.pathname;
    const [formData, setFormData] = useState({});

    useEffect(() => {
        document.title = pathName.slice(1).toUpperCase();
        setFormData({});
    }, [pathName]);

    const inputChangeHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const submitHandler = () => {
        console.log(formData);
    }

    if (pathName === '/login') {
        return (
            <AuthFormWrap>
                <LoginForm inputChangeHandler={inputChangeHandler}
                           submitHandler={submitHandler}
                />
            </AuthFormWrap>
        )
    } else if (pathName === '/register') {
        return (
            <AuthFormWrap>
                <RegisterForm inputChangeHandler={inputChangeHandler}
                              submitHandler={submitHandler}
                />
            </AuthFormWrap>
        );
    }
};

export default AuthPage;
