import React from "react";
import ReactDom from 'react-dom/client'
import reactLogo from '../src/images/react.png'
import '../src/css/index.css'

const rootElement = document.querySelector('#root');
const root = ReactDom.createRoot(rootElement);
root.render(
    <div>
        <h1>Hello form React Application</h1>
        <img src={reactLogo} />
    </div>
) 
