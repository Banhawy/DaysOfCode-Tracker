import React, { Component } from 'react'
import SkiDayCount from './SkiDayCount'
import SkiDayList from './SkiDayList'
import AddDayForm from './AddDayForm'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            allSkiDays: [
                {
                    resort: "Napa Valley",
                    date: new Date("07/1/2016"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Apple Valley",
                    date: new Date("08/20/2017"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Golden Valley",
                    date: new Date("09/1/2017"),
                    powder: false,
                    backcountry: true
                },
                {
                    resort: "Trump Valley",
                    date: new Date("11/9/2017"),
                    powder: true,
                    backcountry: false
                }
            ]
        }
    }

    countDays(filter){
        const { allSkiDays } = this.state
        return allSkiDays.filter(  (day) =>  (filter) ? day[filter] : day ).length 
    }
    
    render () {
        return (
            <div className="app">
                {(this.props.location.pathname === "/") ? 
                <SkiDayCount total={this.countDays()}
                             powder={this.countDays("powder")}
                             backcountry={this.countDays("backcountry ")}/> :
                (this.props.location.pathname === "/add-day") ?
                    <AddDayForm /> :
                    <SkiDayList days={this.state.allSkiDays}/>
                }
                
            </div>
        )
    }
}

export default App