import { useParams } from "react-router-dom";


function WeekView(props){
    const {start, end} = useParams()
    console.log(start, end)

    return <h1>WeekView!!</h1>
}

export default WeekView;