import { useLoaderData } from "react-router"
import LiftMap from "../Components/LiftMap"


function MapView(){

    const data = useLoaderData()
    console.log(data)

    const mountainTime = new Date(data.reportDate)

    return (
        <>
            <h1>Lift Status as of {mountainTime.toLocaleString()}</h1>
            <LiftMap liftReportData = {data} />
        </>
        
    )
}

export default MapView