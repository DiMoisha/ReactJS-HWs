import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const appHeading = 'ChatBook';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App appHeading={appHeading} />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);