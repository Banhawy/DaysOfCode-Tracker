import React from 'react'

const AddDayForm = ({resort, date, commit, readings, puzzles, onNewDay, gitLink, readingLink}) => {
    let _resort, _date, _commit, _gitLink, _readings, _puzzles, _readingLink
    const style = {
        color: 'white'
    }
    const submit = (e) => {
        onNewDay({
            resort: _resort.value,
            date: _date.value,
            commit: _commit.checked,
            gitLink: _gitLink.value,
            readings: _readings.checked,
            readingLink: _readingLink.value,
            puzzles: _puzzles.checked
        })
        e.preventDefault()
        _resort.value = ''
        _date.value = ''
        _gitLink.value = ''
        _readingLink.value = ''
        _commit.checked = false
        _readings.checked = false
        _puzzles.checked = false
    }
    return (
        <div>
            <form onSubmit={submit} className="add-day-form">
                <label htmlFor="resort" >Resort Name</label>
                <input id="form" 
                       type="text" 
                       required
                       defaultValue={resort}
                       ref={input => _resort = input} />

                <label htmlFor="date" >Date</label>
                <input id="date" 
                       type="date" 
                       required
                       defaultValue={date}
                       ref={input => _date = input} />
                <div>
                    <input id="commit" type="checkbox" ref={input => _commit = input}  />
                    <label htmlFor="commit" >Commits</label>
                    <label htmlFor="gitLink" >Link to Project</label>
                    <input id="gitLink" 
                        type="text"
                        defaultValue={gitLink}
                        ref={input => _gitLink = input} />
                </div>
                <div>
                    <input id="readings" type="checkbox" ref={input => _readings = input} />
                    <label htmlFor="readings" >Readings</label>
                    <label htmlFor="gitLink" >Link to Reading</label>
                    <input id="gitLink" 
                        type="text"
                        defaultValue={readingLink}
                        ref={input => _readingLink = input} />
                </div>
                <div>
                    <input id="puzzles" type="checkbox" ref={input => _puzzles = input} />
                    <label htmlFor="puzzles" >Challenges</label>
                </div>
                <button>Add Day</button>
            </form>
        </div>
    )
}

// AddDayForm.defaultProps = {
//     resort: '',
//     date: '',
//     commit: false,
//     gitLink: '',
//     readingLink: '',
//     readings: false,
//     puzzles: false
// }

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
