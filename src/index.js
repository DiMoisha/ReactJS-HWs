import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
//import reportWebVitals from './reportWebVitals';

const headingApp = 'Homework-1';
const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloribus exercitationem debitis quo, vel dignissimos voluptatibus saepe veniam inventore voluptatum pariatur modi commodi eum, cupiditate tempora ullam tenetur ratione fugiat.";

ReactDOM.render(
 <React.StrictMode>
   <App heading={headingApp} msgText={message} />
 </React.StrictMode>,
 document.getElementById("root")
);