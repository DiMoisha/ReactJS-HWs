import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const headingApp = 'ChatBook';

ReactDOM.render(
 <React.StrictMode>
   <App heading={headingApp} />
 </React.StrictMode>,
 document.getElementById("root")
);