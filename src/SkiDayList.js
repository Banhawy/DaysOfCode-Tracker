import React from 'react';
import {Link} from 'react-router'

import { SkiDayRow } from './SkiDayRow';

const SkiDayList = ({ days, filter }) => {
    const filteredDays = (!filter || !filter.match(/commit|readings|puzzles/)) ? days: days.filter(day => day[filter])
    return (
        <div className="ski-day-list">
            <table>
                <thead>  
                    <tr>
                        <th>Date</th>
                        <th>Resort</th>
                        <th>Commits</th>
                        <th>Readings</th>
                        <th>Challenges</th>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Link to="/list-days">
                                All Days
                            </Link>
                            <Link to="/list-days/commit">
                                Commits
                            </Link>
                            <Link to="/list-days/readings">
                                Readings
                            </Link>
                            <Link to="/list-days/puzzles">
                                Challenges
                            </Link>
                        </td>
                    </tr>
                </thead>
            
                <tbody>
                    {filteredDays.map((day, i ) => 
                        <SkiDayRow key={i}
                                {...day}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default SkiDayList