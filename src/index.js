import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<SkiDayCount backcountry={200} />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
