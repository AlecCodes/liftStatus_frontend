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

    //Load everything for current month
    useEffect(() => {
        loadMonthData(getToday.getMonth() + 1, getToday.getFullYear())
    }, [])

    //Access the state immediately after calling setToday
    useEffect(() => {
        console.log(getToday)
    }, [getToday])

    async function leftClickHandler(e){
        console.log("CLICKE LEFT")
        const newDate = new Date(getToday)
        newDate.setMonth(getToday.getMonth() - 1)
        setToday(newDate)
    }

    async function rightClickHandler(e){
        console.log("CLICKE RIGTH")
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