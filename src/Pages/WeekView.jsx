import { useParams } from "react-router";


function WeekView(props, {params}){
    const {dateRange} = useParams()
    console.log(dateRange)

    return <h1>WeekView!!</h1>
}

export default WeekView;