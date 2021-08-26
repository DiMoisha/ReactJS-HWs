import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const appHeading = 'ChatBook';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App appHeading={appHeading} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);