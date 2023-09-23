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

    return (
        <>
            <h1>MONTH VIEW!!</h1>
            <i className="arrow left"
            onClick={(e) => setMonthState(getMonthState - 1)}
            ></i>
            <i>{getMonthState}/{getYearState}</i>          
            <i className="arrow right"
            onClick={(e) => setMonthState(getMonthState + 1)}
            ></i>
            <MonthCalendar month = {getMonthState} year ={getYearState}/>
        </>
    )
}

export default MonthView