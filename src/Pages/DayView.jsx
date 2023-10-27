import { useLoaderData } from "react-router-dom"


function DayView(props){
    const data = useLoaderData()
//CHAR X TIME TABLE
//STRING TEMPLATE THE STATUS INTO EACH CELLS CLASSNAME FOR COLOR CODING
//IT SHOULD WORK FOR DAYS W MISSING DATA!
//WHAT IF I made a row component and passed the lift status to it 

    console.log(data)
    return (
        <>
            <h1>DAY VIEW!</h1>
            <table>
            <tbody>
                <tr>
                    
                </tr>
                {data.map((day, index, arr) => {
                    const mountainTime = new Date(data[index].reportDate)


                    for (let i=0; i < arr.length; i++){
                        return (
                        <>
                                <tr key = {i}>
                                    <td>{mountainTime.toLocaleString().split(',')[1]}</td>
                                    <td className={`${day.chairs.broadwayExpress}`}>{day.chairs.broadwayExpress}</td>
                                    <td className={`${day.chairs.stumpAlleyExpress}`}>{day.chairs.stumpAlleyExpress}</td>
                                    <td className={`${day.chairs.goldRushExpress}`}>{day.chairs.goldRushExpress}</td>
                                    <td className={`${day.chairs.unboundExpress}`}>{day.chairs.unboundExpress}</td>
                                    <td className={`${day.chairs.discoveryExpress}`}>{day.chairs.discoveryExpress}</td>
                                    <td className={`${day.chairs.chair12}`}>{day.chairs.chair12}</td>
                                    <td className={`${day.chairs.chair13}`}>{day.chairs.chair13}</td>
                                    <td className={`${day.chairs.chair14}`}>{day.chairs.chair14}</td>
                                    <td className={`${day.chairs.chair23}`}>{day.chairs.chair23}</td>
                                    <td className={`${day.chairs.panoramaLower}`}>{day.chairs.panoramaLower}</td>
                                    <td className={`${day.chairs.panoramaUpper}`}>{day.chairs.panoramaUpper}</td>
                                    <td className={`${day.chairs.rollerCoasterExpress}`}>{day.chairs.rollerCoasterExpress}</td>
                                    <td className={`${day.chairs.high5Express}`}>{day.chairs.high5Express}</td>
                                    <td className={`${day.chairs.chair7}`}>{day.chairs.chair7}</td>
                                    <td className={`${day.chairs.chair8}`}>{day.chairs.chair8}</td>
                                    <td className={`${day.chairs.canyonExpress}`}>{day.chairs.canyonExpress}</td>
                                    <td className={`${day.chairs.schoolyardExpress}`}>{day.chairs.schoolyardExpress}</td>
                                    <td className={`${day.chairs.chair20}`}>{day.chairs.chair20}</td>
                                    <td className={`${day.chairs.chair21}`}>{day.chairs.chair21}</td>
                                    <td className={`${day.chairs.chair22}`}>{day.chairs.chair22}</td>
                                    <td className={`${day.chairs.villageGondola}`}>{day.chairs.villageGondola}</td>
                                    <td className={`${day.chairs.cloudNine}`}>{day.chairs.cloudNine}</td>
                                    <td className={`${day.chairs.eagleExpress}`}>{day.chairs.eagleExpress}</td>
                                    <td className={`${day.chairs.chair25}`}>{day.chairs.chair25}</td>
                                </tr>
                        </>)
                    }
                })}

                </tbody>
            </table>
        </>
    )
}

export default DayView
