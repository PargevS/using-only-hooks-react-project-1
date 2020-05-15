import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// ***********************************************
import './index.scss';
import Routes from "./routes";
import Header from "./components/Header";


ReactDOM.render(
    (
        <BrowserRouter>
            <Header/>
            <Routes/>
        </BrowserRouter>
    ),
    document.querySelector('#root')
);

