import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory } from 'react-router';

// ReactDOM.render(<SkiDayCount backcountry={200} />, document.getElementById('root'));

ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={App}/>
                    <Route path="*" component={Whoops404}/>
                </Router>, document.getElementById('root'));
registerServiceWorker();
