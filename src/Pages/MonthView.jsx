import daysInMonth from "../Functions/daysInMonth"
import { useParams } from "react-router-dom"

function MonthView(props){

    const {year, month} = useParams()

    console.log(daysInMonth(year, month))

    return (
    <>
        <h1>MONTH VIEW!!</h1>
    </>
    )
}

export default MonthView