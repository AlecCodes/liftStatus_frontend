import daysInMonth from "../Functions/daysInMonth"
import { useParams } from "react-router-dom"
import MonthCalendar from "../Components/MonthCalendar"
import { useEffect } from "react"
import { useState } from "react"
import { loadMonthData } from "../loaders"


function MonthView(props){

    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()

    const [getToday, setToday] = useState(today)

    useEffect(() => {
        console.log("MOUNT")
    }, [])


    async function leftClickHandler(e){
        const newDate = new Date(getToday)
        newDate.setMonth(getToday.getMonth() -1)
        setToday(newDate)
        loadMonthData(getToday.getMonth(), getToday.getFullYear())
    }

    async function rightClickHandler(e){
        const newDate = new Date(getToday)
        newDate.setMonth(getToday.getMonth() + 1)
        setToday(newDate)
    }


    return (
        <>
            <h1>MONTH VIEW!!</h1>
            <i className="arrow left"
            onClick = {leftClickHandler}
            ></i>
            <i>{getToday.toLocaleDateString()}</i>          
            <i className="arrow right"
            onClick = {rightClickHandler}            
            ></i>
            <MonthCalendar day = {getToday}/>
        </>
    )
}

export default MonthView