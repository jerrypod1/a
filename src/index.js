import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const renApp = document.getElementById('root');
render(<App image="https://cdn.dribbble.com/users/387195/screenshots/2260293/preview_1x.png" author="Jerry Martinez" title="¿Que es lo que estamos haciendo?" />, renApp);
registerServiceWorker();
