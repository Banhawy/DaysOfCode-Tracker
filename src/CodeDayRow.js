import React from 'react';
import GoBook from 'react-icons/lib/go/book';
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import GoPuzzle from 'react-icons/lib/go/puzzle';

export const CodeDayRow = ({resort, date, commit, readings, puzzles, gitLink}) => {
    return (
        
            <tr>
                <td>
                     {date}
                </td>
                <td>
                    {resort}
                </td>
                <td>
                    {(commit) ? <a href={gitLink} target="_blank"> <GoMarkGithub /></a> : null}
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