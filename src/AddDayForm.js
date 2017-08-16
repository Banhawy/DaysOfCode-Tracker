import React from 'react'

const AddDayForm = ({resort, date, powder, backcountry, onNewDay }) => {
    let _resort, _date, _powder, _backcountry
    const submit = (e) => {
        onNewDay({
            resort: _resort,
            date: _date,
            powder: _powder,
            backcountry: _backcountry
        })
        e.preventDefault()
        _resort = ""
        _date = ""
        _powder = false
        _backcountry = false
    }
    return (
        <div>
            <form onSubmit={submit} className="add-day-form">
                <label htmlFor="resort">Resort Name</label>
                <input id="form" 
                       type="text" 
                       required
                       defaultValue={resort}
                       ref={input => _resort = input} />

                <label htmlFor="date">Date</label>
                <input id="date" 
                       type="date" 
                       required
                       defaultValue={date}
                       ref={input => _date = input} />

                <div>
                    <input id="powder" type="checkbox" ref={input => _powder = input}  />
                    <label htmlFor="powder">Powder Day</label>
                </div>
                <div>
                    <input id="backcountry" type="checkbox" ref={input => _backcountry = input} />
                    <label htmlFor="backcountry">Backcountry</label>
                </div>
                <button>Add Day</button>
            </form>
        </div>
    )
}

AddDayForm.defaultProps = {
    resort: "Hollywood",
    date: "2017-01-11",
    powder: true,
    backcountry: false
}

export default AddDayForm

// class AddDayForm extends Component {
//     constructor (props) {
//         super(props)
//         this.submit = this.submit.bind(this)
//     }
//     render () {
//         const {resort, date, powder, backcountry, onNewDay} = this.props 
//         return (
//             <div>
//                 <form onSubmit={this.submit} className="add-day-form">
//                     <label htmlFor="resort">Resort Name</label>
//                     <input id="form" 
//                            type="text" 
//                            required
//                            defaultValue={resort}
//                            ref="resort" />

//                     <label htmlFor="date">Date</label>
//                     <input id="date" 
//                            type="date" 
//                            required
//                            defaultValue={date}
//                            ref="date" />

//                     <div>
//                         <input id="powder" type="checkbox" ref="powder"  />
//                         <label htmlFor="powder">Powder Day</label>
//                     </div>
//                     <div>
//                         <input id="backcountry" type="checkbox" ref="backcountry" />
//                         <label htmlFor="backcountry">Backcountry</label>
//                     </div>
//                     <button>Add Day</button>
//                 </form>
//             </div>
//         )
//     }
// }
