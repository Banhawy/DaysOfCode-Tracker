import React, { Component } from 'react'
import SkiDayCount from './SkiDayCount'
import SkiDayList from './SkiDayList'
import AddDayForm from './AddDayForm'
import Menu from './Menu'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            allSkiDays: [
                {
                    resort: "Napa Valley",
                    date: "07/1/2016",
                    powder: true,
                    backcountry: false
                }
            ]
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
                             powder={this.countDays("powder")}
                             backcountry={this.countDays("backcountry ")}/> :
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