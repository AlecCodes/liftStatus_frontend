//react router or react router dom??
import { useLoaderData, useParams, Link} from "react-router-dom"
import MonthCalendar from "../Components/MonthCalendar"

export function MonthPage(props){
    const data = useLoaderData()
    const {month, year} = useParams()
    //We are gonna do zero-indexed months here.. and then have the calendar component accept the currentMonthDate
    const currentMonthDate = new Date(year, month)

    const previousMonthDate = new Date(currentMonthDate)
    previousMonthDate.setMonth(currentMonthDate.getMonth() - 1)

    const nextMonthDate = new Date(currentMonthDate)
    nextMonthDate.setMonth(currentMonthDate.getMonth() + 1)

    return (
        <>  
            <div className="monthNavContainer">
                <div className="monthNav">
                <Link
                to = {`/showMonth/${previousMonthDate.getMonth()}/${previousMonthDate.getFullYear()}`}
                ><i>Left</i></Link>
                <i>Current Month</i>
                <Link
                to = {`/showMonth/${nextMonthDate.getMonth()}/${nextMonthDate.getFullYear()}`}
                ><i>Right</i></Link>
                </div>
            </div>
            <MonthCalendar day = {currentMonthDate} data = {data}/>
        </>
    )
}