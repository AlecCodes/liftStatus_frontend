import daysInMonth from "../Functions/daysInMonth"
import { useParams } from "react-router-dom"
import MonthCalendar from "../Components/MonthCalendar"
import { useEffect } from "react"
import { useState } from "react"

function MonthView(props){

    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()
    const [getMonthState, setMonthState] = useState(currentMonth)
    const [getYearState, setYearState] = useState(currentYear)
    

    return (
        <>
            <h1>MONTH VIEW!!</h1>
            <i className="arrow left"></i>          
            <i className="arrow right"></i>
            <MonthCalendar month = {getMonthState + 1} year ={getYearState}/>
        </>
    )
}

export default MonthView