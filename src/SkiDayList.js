import React, { Component, PropTypes } from 'react';
import Terrain from 'react-icons/lib/md/terrain'; 
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

import { SkiDayRow } from './SkiDayRow';

const SkiDayList = ({ days }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Resort</th>
                        <th>Powder</th>
                        <th>Backcountry</th>
                    </tr>
                </thead>
            
                <tbody>
                    {days.map((day, i ) => 
                        <SkiDayRow key={i}
                                {...day}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

SkiDayList.propTypes = {
    days: function(days){
        if (!Array.isArray(days)){
            return new Error(
                "SkiDayList should be an array"
            )
        } else if (! days.length){
            return new Error(
                "SkiDayList must have at least one record"
            )
        } else {
            return null;
        }
    }
}

export default SkiDayList