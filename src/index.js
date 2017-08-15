import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SkiDayCount from './SkiDayCount';
import SkiDayList from './SkiDayList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SkiDayCount backcountry={200} />, document.getElementById('root'));

// ReactDOM.render(<SkiDayList days={
//     [
//         {
//             resort: "Napa Valley",
//             date: new Date("07/1/2016"),
//             powder: true,
//             backcountry: false
//         },
//         {
//             resort: "Apple Valley",
//             date: new Date("08/20/2017"),
//             powder: true,
//             backcountry: false
//         },
//         {
//             resort: "Golden Valley",
//             date: new Date("09/1/2017"),
//             powder: false,
//             backcountry: true
//         },
//         {
//             resort: "Trump Valley",
//             date: new Date("11/9/2017"),
//             powder: true,
//             backcountry: false
//         }
//     ]
// }/>, document.getElementById('root'));
registerServiceWorker();
