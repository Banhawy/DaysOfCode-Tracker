import React, { Component } from 'react'

class AddDayForm extends Component {
    render () {
        const {resort, date, powder, backcountry} = this.props
        return (
            <div>
                <form className="add-day-form">
                    <label htmlFor="resort">Resort Name</label>
                    <input id="form" 
                           type="text" 
                           required
                           defaultValue={resort} />

                    <label htmlFor="date">Date</label>
                    <input id="date" 
                           type="date" 
                           required
                           defaultValue={date} />

                    <div>
                        <input id="powder" type="checkbox" />
                        <label htmlFor="powder">Powder Day</label>
                    </div>
                    <div>
                        <input id="backcountry" type="checkbox" />
                        <label htmlFor="backcountry">Backcountry</label>
                    </div>
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