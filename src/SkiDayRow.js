import React from 'react';
import Terrain from 'react-icons/lib/md/terrain'; 
import SnowFlake from 'react-icons/lib/ti/weather-snow';
// import Calendar from 'react-icons/lib/fa/calendar';

export const SkiDayRow = ({resort, date, powder, backcountry}) => {
    return (
        
            <tr>
                <td>
                     {date}
                </td>
                <td>
                    {resort}
                </td>
                <td>
                    {(powder) ? <SnowFlake /> : null}
                </td>
                <td>
                    {(backcountry) ? <Terrain  /> : null}
                </td>
            </tr>
    )
}