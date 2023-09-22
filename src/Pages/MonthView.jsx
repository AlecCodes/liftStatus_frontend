import daysInMonth from "../Functions/daysInMonth"
import { useParams } from "react-router-dom"

function MonthView(props){

    const {year, month} = useParams()
    const daysInMonthList = daysInMonth(year, month)

    console.log(daysInMonthList)

    //We use CSS
    return (
        <>
            <h1>MONTH VIEW!!</h1>
            <ul className="days">
                {daysInMonthList.map((date, index) => {
                    return(<li>{date.toLocaleDateString()}</li>)
                })}
            </ul>
        </>
    )
}

export default MonthView