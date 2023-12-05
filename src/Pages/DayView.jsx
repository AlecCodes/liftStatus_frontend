import { useLoaderData , useParams, Link} from "react-router-dom"


function DayView(props){
    const data = useLoaderData()
    const {day} = useParams()
//CHAR X TIME TABLE
//STRING TEMPLATE THE STATUS INTO EACH CELLS CLASSNAME FOR COLOR CODING
//IT SHOULD WORK FOR DAYS W MISSING DATA!
//WHAT IF I made a row component and passed the lift status to it 
    console.log(data)
    const tomorrow = new Date(day)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const yesterday = new Date(day)
    yesterday.setDate(yesterday.getDate() - 1)




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
                    <td>Base Area last 24hr</td>
                    {data.map((liftReport, index) => {
                        return (<td>
                            {liftReport.snowReport.BaseAreaLast24h}
                        </td>)
                    })}
                </tr>
                <tr>
                    <td>Mid mountain last 24hr</td>
                    {data.map((liftReport, index) => {
                        return (<td>
                            {liftReport.snowReport.MidMountainAreaLast24h}
                        </td>)
                    })}
                </tr>
                <tr>
                    <td>Summit Area last 24hr</td>
                    {data.map((liftReport, index) => {
                        return (<td>
                            {liftReport.snowReport.SummitAreaLast24h}
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
