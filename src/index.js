import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SkiDayCount from './SkiDayCount';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SkiDayCount total={50}
                             powder={20}
                             backcountry={10}
                             goal={100} />, document.getElementById('root'));
registerServiceWorker();
