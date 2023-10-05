import { useLoaderData } from "react-router-dom"

function DayView(props){
    const data = useLoaderData()
    console.log(data)
    return (
        <>
            <h1>DAY VIEW!</h1>
        </>
    )
}

export default DayView
