import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// *************************
import {useFetch} from './../../hooks';
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import AuthFormWrap from "../../components/UI/AutFormWrap";

const AuthPage = ({match}) => {
    const pathName = match.path === '/login' ? true : false;
    const pageTitle = pathName  ? 'Sing In' : 'Sing Up';
    const descriptionText = pathName  ? 'Need an account?' : 'Have an account?';
    const authUrl = '/users' + (pathName ? '/login' : '');
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [{response, isLoading, error}, doFetch] = useFetch();


    useEffect(() => {
        document.title = pageTitle;
        if (isSubmitting) {
            doFetch(authUrl, 'POST', {user: formData});
            setIsSubmitting(false);
        }
        setFormData({});
    }, [pathName, isSubmitting]);

    const inputChangeHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const submitHandler = () => setIsSubmitting(true);

    return (
        <AuthFormWrap>
            <h2 className='page-title'>{pageTitle}</h2>
            <Link to={pathName  ? 'register' : '/login'} exact='true'>{descriptionText}</Link>
            {
                pathName  ? (<LoginForm inputChangeHandler={inputChangeHandler}
                                                    submitHandler={submitHandler}/>)
                    : (<RegisterForm inputChangeHandler={inputChangeHandler}
                                     submitHandler={submitHandler}/>)
            }
        </AuthFormWrap>
    );
};

export default AuthPage;
