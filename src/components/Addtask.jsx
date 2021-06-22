import { useState } from "react"

const Addtask = ({onAdd}) => {
    const [text,setText] = useState('')    
    const [day,setDay] = useState('')    
    const [reminder,setReminder] = useState('false')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert("Please add a task!");
        }

        onAdd({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(true)
    }

    return (
        <form className = 'form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Schedule:</label>
                <input 
                type = "text" 
                placeholder = "Add Task"
                value = {text}
                onChange = {(e) => setText(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <label>Day and Time:</label>
                <input 
                type = "text" 
                placeholder = "Set day and time"
                value = {day}
                onChange = {(e) => setDay(e.target.value)}/>
            </div>
            <div className = 'form-control form-control-check'>
                <label>Set Reminder:</label>
                <input 
                type = "checkbox"
                checked = {reminder}
                value = {reminder}
                onChange = {(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type = "submit" value = "Save Task" className = "btn btn-block"/>
        </form>
    )
}

export default Addtask
