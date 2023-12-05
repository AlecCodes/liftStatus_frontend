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

    console.log(getHourlySnowFall(dummyData))
    

    //Get each hour snowfall
    const snowfallOnly = data.map((element) => element.snowReport)
    const hourlySnowFall = getHourlySnowFall(snowfallOnly)


    const liftNames = Object.keys(data[0].chairs)


    return (
        <>
            <h1 className="dayDate">{data[0].reportDate.split('T')[0]}</h1>
            <Link
            to = {`../../showDay/${yesterday.toISOString()}`}
            >YESTERDAY </Link>
            <Link
            to = {`../../showDay/${tomorrow.toISOString()}`}
            > TOMORROW</Link>
            <table>
            <tbody>
                <tr>
                    <td>liftname</td>
                    {data.map((liftReport, index) => {
                        const mountainTime = new Date(liftReport.reportDate)
                        return(
                            <td>{mountainTime.toLocaleString("en-US", {timeZone:"America/Los_Angeles"}).split(',')[1]}</td>
                        )
                    })}
                </tr>
                <tr>
                    <td>Base</td>
                    {hourlySnowFall.map((snowReport, index) => {
                        return (<td>
                            {(snowReport.base >=0) ? snowReport.base : 0}"
                        </td>)
                    })}
                </tr>
                <tr>
                    <td>Mid mountain</td>
                    {hourlySnowFall.map((snowReport, index) => {
                        return (<td>
                            {(snowReport.mid >=0) ? snowReport.mid : 0}"
                        </td>)
                    })}
                </tr>
                <tr>
                    <td>Summit</td>
                    {hourlySnowFall.map((snowReport, index) => {
                        return (<td>
                            {(snowReport.summit >=0) ? snowReport.summit : 0}"
                        </td>)
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
