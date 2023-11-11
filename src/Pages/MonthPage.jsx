//react router or react router dom??
import { useLoaderData, useParams, Link} from "react-router-dom"


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
            <h1>New Month Page</h1>
            <Link
            to = {`/showMonth/${previousMonthDate.getMonth()}/${previousMonthDate.getFullYear()}`}
            ><i>Left</i></Link>
            <i>{month}/{year}</i>
            <Link
            to = {`/showMonth/${nextMonthDate.getMonth()}/${nextMonthDate.getFullYear()}`}
            ><i>Right</i></Link>
        </>
    )
}