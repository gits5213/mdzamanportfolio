import React from "react";
import ReactDOM from "react-dom";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import App from './app';
import './styles.css';



const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/mdzamanportfolio'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
