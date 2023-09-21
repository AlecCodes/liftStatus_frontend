import { useParams } from "react-router-dom";
import getUTCDateRange from "../Functions/dayRange";

function WeekView(props){
    const {start, end} = useParams()
    console.log('daterange', getUTCDateRange(start, end))
    const days = getUTCDateRange(start, end)
 
    return (
        <table border='solid'>
            <tr>
                {days.map((element, index) => (
                            <td 
                            key = {index} 
                            ISO = {element} 
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

        </table>

    )
}

export default WeekView;