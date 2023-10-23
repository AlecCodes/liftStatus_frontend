import { useLoaderData } from "react-router-dom"

function DayView(props){
    const data = useLoaderData()
//CHAR X TIME TABLE
//STRING TEMPLATE THE STATUS INTO EACH CELLS CLASSNAME FOR COLOR CODING
//IT SHOULD WORK FOR DAYS W MISSING DATA!
//    console.log(data)
    return (
        <>
            <h1>DAY VIEW!</h1>
            <table>
            <tbody>
                <tr>
                {data.map((element, index) => {
                    for (let i in Object.keys(element.chairs)){
                        const mountainTime = new Date(data[index].reportDate)
                        return <td key ={index}> {mountainTime.toLocaleString().split(',')[1]}</td>
                    }
                })}
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default DayView
