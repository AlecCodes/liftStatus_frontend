import daysInMonth from "../Functions/daysInMonth"

function MonthCalendar(props){

    const daysInMonthList = daysInMonth(props.year, props.month)

    //this aligns the start of the month on the proper day of week on our calendar
    const firstDay = daysInMonthList[0].getDay()
    const leadingBlankDays = []
    for (let i = 0; i < firstDay; i++){
        leadingBlankDays.push(<li key ={i} >&nbsp;</li>)
    }
    
    
    //We use CSS
    return (
        <>
            <h1>MONTH VIEW!!</h1>
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
                    >{date.toLocaleDateString()}</li>)
                })}
            </ul>
        </>
    )
}

export default MonthCalendar