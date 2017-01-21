import { PropTypes, Component } from 'react'

export const AddDayForm = ({ resort, date, powder, backcountry }) => {

      let _resort, _date, _powder, _backcountry

    const submit = (e) => {
        e.preventDefault()
        console.log('resort', _resort.value)
        console.log('date', _date.value)
        console.log('powder', _powder.checked)
        console.log('backcountry', _backcountry.checked)
    }

    return(
        <form  onSubmit={submit} className="add-day-form">
            <label htmlFor="resort">Resort Name</label>
            <input type="text" id="resort" defaultValue={resort} ref={input => _resort = input} required/>

            <label htmlFor="date">Date</label>
            <input type="date" id="date" defaultValue={date} ref={input => _date = input} required/>

            <div>
                <input type="checkbox" id="powder" ref={input => _powder = input} defaultChecked={powder}/>
                <label htmlFor="powder">Powder Day</label>
            </div>

            <div>
                <input type="checkbox" id="backcountry" ref={input => _backcountry = input} defaultChecked={backcountry}/>
                <label htmlFor="backcountry">Backcountry Day</label>
            </div>
            <button> Add Day </button>
        </form>
    )
}

AddDayForm.defaultProps  = {
    resort: "Panama",
    date: "2017-02-12",
    powder: true,
    backcountry: false
}

AddDayForm.PropTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}