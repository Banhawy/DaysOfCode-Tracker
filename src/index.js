import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Whoops404 from './Whoops404';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory } from 'react-router';

// ReactDOM.render(<SkiDayCount backcountry={200} />, document.getElementById('root'));

ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={App}/>
                    <Route path="list-days" component={App}>
                        <Route path=":filter" component={App}/>
                    </Route>
                    <Route path="add-day" component={App}/>
                    <Route path="*" component={Whoops404}/>
                </Router>, document.getElementById('root'));
registerServiceWorker();
