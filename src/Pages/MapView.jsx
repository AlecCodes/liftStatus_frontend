import { useLoaderData } from "react-router"
import LiftMap from "../Components/LiftMap"


function MapView(){

    const data = useLoaderData()
    console.log(data)



    return (
        <>
            <h1>Lift Status as of {data.reportDate}</h1>
            <LiftMap liftReportData = {data} />
        </>
        
    )
}

export default MapView