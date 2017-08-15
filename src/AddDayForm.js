import React, { Component } from 'react'

class AddDayForm extends Component {
    constructor (props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    
    submit(e){
        e.preventDefault()
        console.log("resort", this.refs.resort.value)
        console.log("date", this.refs.date.value)
        console.log("powder", this.refs.powder.checked)
        console.log("backcountry", this.refs.backcountry.checked)
    }
    render () {
        const {resort, date, powder, backcountry} = this.props 
        return (
            <div>
                <form onSubmit={this.submit} className="add-day-form">
                    <label htmlFor="resort">Resort Name</label>
                    <input id="form" 
                           type="text" 
                           required
                           defaultValue={resort}
                           ref="resort" />

                    <label htmlFor="date">Date</label>
                    <input id="date" 
                           type="date" 
                           required
                           defaultValue={date}
                           ref="date" />

                    <div>
                        <input id="powder" type="checkbox" ref="powder"  />
                        <label htmlFor="powder">Powder Day</label>
                    </div>
                    <div>
                        <input id="backcountry" type="checkbox" ref="backcountry" />
                        <label htmlFor="backcountry">Backcountry</label>
                    </div>
                    <button>Add Day</button>
                </form>
            </div>
        )
    }
}

AddDayForm.defaultProps = {
    resort: "Hollywood",
    date: "2017-01-11",
    powder: true,
    backcountry: false
}

export default AddDayForm

// const AddDayForm = () => {
//     return (
//         <div>
//             <h1>Add A Day</h1>
//         </div>
//     )
// }