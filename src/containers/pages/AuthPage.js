import React, {useState, useEffect, useContext} from 'react';
import {Link, Redirect} from 'react-router-dom';
// *************************
import {useFetch, useLocalStorage} from './../../hooks';
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import AuthFormWrap from "../../components/UI/AutFormWrap";
import {CurrentUserContext} from "../../contexts/currentUser";


const AuthPage = ({match}) => {
    const pathName = match.path === '/login' ? true : false;
    const pageTitle = pathName ? 'Sing In' : 'Sing Up';
    const descriptionText = pathName ? 'Need an account?' : 'Have an account?';
    const authUrl = '/users' + (pathName ? '/login' : '');
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccessFullSubmit, setIsSuccessFullSubmit] = useState(false);
    const [{response, isLoading, error}, doFetch] = useFetch();
    const [token, setToken] = useLocalStorage('token');
    const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext);


    useEffect(() => {
        document.title = pageTitle;
        if (isSubmitting) {
            doFetch(authUrl, 'POST', {user: formData});
            setIsSubmitting(false);
        }
        setFormData({});
    }, [pathName, isSubmitting]);

    useEffect(() => {
        if (!response) return;
        setToken(response.user.token);
        setIsSuccessFullSubmit(true);
        setCurrentUserState((state) => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            currentUser: response.user
        }))
    }, [response, setToken, setIsSuccessFullSubmit]);

    const inputChangeHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const submitHandler = () => setIsSubmitting(true);

    // rendering
    if (isSuccessFullSubmit) return <Redirect to='/'/>
    return (
        <AuthFormWrap>
            <h2 className='page-title'>{pageTitle}</h2>
            <Link to={pathName ? 'register' : '/login'} exact='true' className='auth-link'>{descriptionText}</Link>
            {pathName ? (<LoginForm inputChangeHandler={inputChangeHandler}
                                    submitHandler={submitHandler}
                                    errors={error ? error : null}/>)
                : (<RegisterForm inputChangeHandler={inputChangeHandler}
                                 submitHandler={submitHandler}
                                 errors={error ? error.errors : null}/>)}
        </AuthFormWrap>
    );
};

export default AuthPage;
