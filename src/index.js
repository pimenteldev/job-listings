import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './contexts/theme'
import App from './_app';
import './styles/global.css';
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
);
