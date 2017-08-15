import React, { Component } from 'react';
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
            </table>
            <tbody>
                {days.map((day, i ) => 
                    <SkiDayRow key={i}
                               {...day}/>
                )}
            </tbody>
        </div>
    )
}

export default SkiDayList