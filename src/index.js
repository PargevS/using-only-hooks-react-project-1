import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// ***********************************************
import './index.scss';
import Routes from "./routes";
import Header from "./components/Header";
import {CurrentUserProvider} from "./contexts/currentUser";


ReactDOM.render(
    (
        <CurrentUserProvider>
            <BrowserRouter>
                <Header/>
                <Routes/>
            </BrowserRouter>
        </CurrentUserProvider>
    ),
    document.querySelector('#root')
);

