import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HooksApp } from './HooksApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import './index.css';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CallbackHook />
    </React.StrictMode>
);
