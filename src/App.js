import React, { Component } from 'react'
import CodeDayCount from './CodeDayCount'
import CodeDayList from './CodeDayList'
import AddDayForm from './AddDayForm'
import Menu from './Menu'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            allCodeDays: []
        }
        this.addDay = this.addDay.bind(this)
    }

    addDay(newDay){
        this.setState({
            allCodeDays: [
                ...this.state.allCodeDays,
                newDay
            ]
        })
    }

    countDays(filter){
        const { allCodeDays } = this.state
        return allCodeDays.filter(  (day) =>  (filter) ? day[filter] : day ).length 
    }
    
    render () {
        return (
            <div className="app">
                <Menu />
                {(this.props.location.pathname === "/") ? 
                <CodeDayCount total={this.countDays()}
                             commit={this.countDays("commit")}
                             readings={this.countDays("readings")}
                             puzzles={this.countDays("puzzles")}/> :
                (this.props.location.pathname === "/add-day") ?
                    <AddDayForm onNewDay={this.addDay}/> :
                    <CodeDayList days={this.state.allCodeDays}
                                filter={this.props.params.filter}/>
                }
                
            </div>
        )
    }
}

export default App