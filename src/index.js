import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store} from './store'
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const appHeading = 'ChatBook';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App appHeading={appHeading} />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);