import { useParams } from "react-router-dom";
import getUTCDateRange from "../Functions/dayRange";
 
function WeekView(props){
    const {start, end} = useParams()
    console.log('daterange', getUTCDateRange(start, end))
    const days = getUTCDateRange(start, end)
 
    return (
        
        <table border='solid'>
            <tbody>
            <tr>
                {days.map((element, index) => (
                            <td 
                            key = {index} 
                            iso = {element} 
                            >{element.toDateString()}</td>
                        )
                    )
                }

            </tr>
            {/* <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr> */}
            </tbody>
        </table>
    )
}

export default WeekView;