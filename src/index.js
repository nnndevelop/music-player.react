import React from 'react';
import { createRoot} from 'react-dom/client';
import App from './App';

const con =document.querySelector('#root');
const root = createRoot(con);

root.render(<App/>)

