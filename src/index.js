import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const headingApp = 'Homework-2';

ReactDOM.render(
 <React.StrictMode>
   <App heading={headingApp} />
 </React.StrictMode>,
 document.getElementById("root")
);