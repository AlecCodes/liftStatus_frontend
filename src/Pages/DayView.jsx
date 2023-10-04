import { useParams } from "react-router-dom"

function DayView(props){
    const {day} = useParams()
    console.log(day)
    return (
        <>
            <h1>DAY VIEW!</h1>
        </>
    )
}

export default DayView