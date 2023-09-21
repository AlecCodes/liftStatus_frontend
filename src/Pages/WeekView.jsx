import { useParams } from "react-router-dom";
import getUTCDateRange from "../Functions/dayRange";

function WeekView(props){
    const {start, end} = useParams()
    console.log('daterange', getUTCDateRange(start, end))
 
    return <h1>WeekView!!</h1>
}

export default WeekView;