import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./context/providerContext";
import './localization/i18n';

ReactDOM.render(
    <BrowserRouter>
        <StateProvider>
            <Suspense fallback={<div>loading...</div>}>
                <App />
            </Suspense>
        </StateProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();