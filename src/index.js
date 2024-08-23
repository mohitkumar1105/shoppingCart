import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from './Context/ContextProvider';
import { store } from './redux/Store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';



// import { ContextProvider } from './Context/ContextProvider';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(





        <ContextProvider>

                <BrowserRouter >

                        <Provider store={store}>

                                <App />
                                <Toaster />

                        </Provider>

                </BrowserRouter>


        </ContextProvider>












)




