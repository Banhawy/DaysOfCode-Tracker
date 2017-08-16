import React from 'react';
import GoBook from 'react-icons/lib/go/book';
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import GoPuzzle from 'react-icons/lib/go/puzzle';

export const SkiDayRow = ({resort, date, commit, readings, puzzles}) => {
    return (
        
            <tr>
                <td>
                     {date}
                </td>
                <td>
                    {resort}
                </td>
                <td>
                    {(commit) ? <GoMarkGithub /> : null}
                </td>
                <td>
                    {(readings) ? <GoBook  /> : null}
                </td>
                <td>
                    {(puzzles) ? <GoPuzzle  /> : null}
                </td>
            </tr>
    )
}