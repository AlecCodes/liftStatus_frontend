import { useLoaderData } from "react-router-dom"

function DayView(props){
    const data = useLoaderData()
    console.log(data)
    return (
        <>
            <h1>DAY VIEW!</h1>
            <ul>
            {data.map((element, index) => {
                for (let i in Object.keys(element.chairs)){
                    const mountainTime = new Date(data[index].reportDate)
                    return <li key ={index}>{mountainTime.toLocaleString()}</li>
                }
            })}
            </ul>
        </>
    )
}

export default DayView
