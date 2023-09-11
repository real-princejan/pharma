import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css";

// Router
import { BrowserRouter } from 'react-router-dom';

     

//  
// import $ from 'jquery';
// import Popper from 'popper.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>


);
