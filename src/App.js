import React, { Component } from 'react'
import SkiDayCount from './SkiDayCount'
import SkiDayList from './SkiDayList'
import AddDayForm from './AddDayForm'
import Menu from './Menu'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            allSkiDays: []
        }
        this.addDay = this.addDay.bind(this)
    }

    addDay(newDay){
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        })
    }

    countDays(filter){
        const { allSkiDays } = this.state
        return allSkiDays.filter(  (day) =>  (filter) ? day[filter] : day ).length 
    }
    
    render () {
        return (
            <div className="app">
                <Menu />
                {(this.props.location.pathname === "/") ? 
                <SkiDayCount total={this.countDays()}
                             commit={this.countDays("commit")}
                             readings={this.countDays("readings")}
                             puzzles={this.countDays("puzzles")}/> :
                (this.props.location.pathname === "/add-day") ?
                    <AddDayForm onNewDay={this.addDay}/> :
                    <SkiDayList days={this.state.allSkiDays}
                                filter={this.props.params.filter}/>
                }
                
            </div>
        )
    }
}

export default App