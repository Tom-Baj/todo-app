import React from 'react';
import ReactDOM from 'react-dom/client';
import '@shoelace-style/shoelace/dist/themes/light.css';
import './index.scss';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import Home from './pages/Home';

setBasePath(
    'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.1/cdn/',
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
);
