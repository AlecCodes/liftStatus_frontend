import daysInMonth from "../Functions/daysInMonth"
import { useParams } from "react-router-dom"
import MonthCalendar from "../Components/MonthCalendar"
import { useEffect } from "react"
import { useState } from "react"


function MonthView(props){

    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()
    const [getMonthState, setMonthState] = useState(currentMonth+1)
    const [getYearState, setYearState] = useState(currentYear)

    const [getToday, setToday] = useState(today)


    return (
        <>
            <h1>MONTH VIEW!!</h1>
            <i className="arrow left"
            onClick = {(e) => {
                const newDate = new Date(getToday)
                newDate.setMonth(getToday.getMonth() - 1)
                setToday(newDate)
            }}
            ></i>
            <i>{getToday.toLocaleDateString()}</i>          
            <i className="arrow right"
            onClick = {(e) => {
                const newDate = new Date(getToday)
                newDate.setMonth(getToday.getMonth() + 1)
                setToday(newDate)
            }}            
            ></i>
            <MonthCalendar month = {getToday.getMonth() + 1} year = {getToday.getFullYear()}/>
        </>
    )
}

export default MonthView