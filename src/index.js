import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { profileStore } from "./store/index";
import { Provider } from 'react-redux';

const appHeading = 'ChatBook';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={profileStore}>
        <App appHeading={appHeading} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);