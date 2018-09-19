import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

if (window.screen &&
  window.screen.orientation && window.screen.orientation.lock) {
    window.screen.orientation.lock('portrait').catch(() => ({}))
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
