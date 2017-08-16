import React, { Component  } from 'react';
import './App.css';
import GoBook from 'react-icons/lib/go/book';
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import GoPuzzle from 'react-icons/lib/go/puzzle';
import Calendar from 'react-icons/lib/fa/calendar';  

class CodeDayCount extends Component {
  constructor (props) {
    super(props)
  }
  
  percentToDecimal(decimal){
    return (
      (decimal*100) + "%"
    )
  }

  calcGoalProgress(total, goal){
    return this.percentToDecimal(total/goal);
  }

  render() {
    return (
      <div className="code-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <Calendar /> 
          <span> days</span>
        </div>
        <div className="commit-days">
          <span>{this.props.commit}</span>
            <GoMarkGithub /> 
          <span> days</span>
        </div>
        <div className="readings-days">
          <span>{this.props.readings}</span>
            <GoBook /> 
          <span> days</span>
        </div>
        <div className="puzzle-days">
          <span>{this.props.puzzles}</span>
            <GoPuzzle /> 
          <span> days</span>
        </div>
        <div className="">
        <span>
          {this.calcGoalProgress(this.props.total, 
                                 this.props.goal)
          }
          </span>
        </div>
      </div>
    );
  }
}

CodeDayCount.defaultProps = {
  total: 0,
  commit: 0,
  backcountry: 0,
  puzzles: 0,
  goal: 100
}

export default CodeDayCount;
