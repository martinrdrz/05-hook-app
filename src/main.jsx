import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HooksApp } from './HooksApp';
import { CounterWithCustomHook } from './CounterWithCustomHook';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterWithCustomHook />
    </React.StrictMode>
);
