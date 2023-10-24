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
                {data.map((day, index, arr) => {
                    const mountainTime = new Date(data[index].reportDate)
                    console.log(arr.length)

                    const liftnames = Object.keys(day.chairs)
                    console.log(liftnames)



                    for (let i=0; i < arr.length; i++){
                        return (
                        <>
                                <tr key = {i}>
                                    <td>{mountainTime.toLocaleString()}</td>
                                    <td>{day.chairs.broadwayExpress}</td>
                                    <td>{day.chairs.stumpAlleyExpress}</td>
                                    <td>{day.chairs.unboundExpress}</td>
                                    <td>{day.chairs.goldRushExpress}</td>
                                    <td>{day.chairs.discoveryExpress}</td>
                                    <td>{day.chairs.chair12}</td>
                                </tr>
                        </>)
                    }

                    // for (let i of Object.values(element.chairs)){
                    //     const mountainTime = new Date(data[index].reportDate)
                    //     console.log(i)
                    //     return (
                    //     <>
                    //         <tr>
                    //             <td key ={index}> {mountainTime.toLocaleString().split(',')[1]}</td>
                    //         </tr>
                    //     </>
                    //     )
                    // }
                })}

                </tbody>
            </table>
        </>
    )
}

export default DayView
