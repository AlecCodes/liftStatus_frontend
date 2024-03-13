import { useLoaderData , useParams, Link} from "react-router-dom"
import { dummyData } from "../dummySnowData"
import { getHourlySnowFall } from "../Functions/hourlySnowFall"


function DayView(props){
    const data = useLoaderData()
    const {day} = useParams()

//    console.log(data)
    //For the Date adjustment buttons
    const tomorrow = new Date(day)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const yesterday = new Date(day)
    yesterday.setDate(yesterday.getDate() - 1)
    const today = new Date()

    const isTomorrow = tomorrow < today;
    console.log(isTomorrow)

    
    const liftNames = Object.keys(data[0].chairs)


    return (
        <>
            <h1 className="dayDate">{data[0].reportDate.split('T')[0]}</h1>
            <Link
            to = {`../../showDay/${yesterday.toISOString()}`}
            >YESTERDAY </Link>

            {
            isTomorrow && 
            <Link
            to = {`../../showDay/${tomorrow.toISOString()}`}
            > TOMORROW</Link>
            }
            <table>
            <tbody>
                <tr>
                    <td>Mountain Time</td>
                    {data.map((liftReport, index) => {
                        const mountainTime = new Date(liftReport.reportDate)
                        return(
                            <td>{mountainTime.toLocaleString("en-US", {timeZone:"America/Los_Angeles"}).split(',')[1]}</td>
                        )
                    })}
                </tr>
                {liftNames.map((lift,index) => {
                    return (
                        <>
                        <tr>
                            <td>{lift}</td>
                            {data.map((liftReport, index) => {
                                return (
                                    <td className={`${liftReport.chairs[lift]}`}>{liftReport.chairs[lift]}</td>   
                                )
                            })}
                        </tr>
                        </>
                    )
                })}
            </tbody>    
            </table>
            
        </>
    )
}

export default DayView
