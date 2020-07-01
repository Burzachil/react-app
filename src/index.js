import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootNode = document.getElementById('root')

ReactDOM.render(
    <App />,
    rootNode

);

serviceWorker.unregister();
