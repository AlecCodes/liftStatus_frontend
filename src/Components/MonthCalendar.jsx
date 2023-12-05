import daysInMonth from "../Functions/daysInMonth"
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
const URI = 'https://pure-wildwood-05827.herokuapp.com/dateRange/month/'
import { dayReportCard } from "../Functions/dayReportCard"

function MonthCalendar(props){
    //0 indexed 
    let month = props.day.getMonth() 
    let year = props.day.getFullYear()
    const daysInMonthList = daysInMonth(year, month)

    //this aligns the start of the month on the proper day of week on our calendar
    const firstDay = daysInMonthList[0].getDay()
    const leadingBlankDays = []
    for (let i = 0; i < firstDay; i++){
        leadingBlankDays.push(<li key ={i} >&nbsp;</li>)
    }
    

    //We use CSS
    return (
        <>
            <ul className="weekdays">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul className="days">
                {leadingBlankDays}
                {daysInMonthList.map((date, index) => {
                    return(<li
                    key={index}
                    >
                        <Link to={`../showDay/${date.toISOString()}`}>{date.toLocaleDateString()} {dayReportCard(props.data, date.getDate())}</Link>
                    </li>)
                })}
            </ul>
        </>
    )
}

export default MonthCalendar