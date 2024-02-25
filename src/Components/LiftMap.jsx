function LiftMap(props){

    const data = props.liftReportData.chairs
    console.log(data)



    return(
        <>
            <h1>LIFTMAPP</h1>
            <div className="map-container">
                <img id = "liftMap" src="https://imgur.com/I4yb0G5.png"/>
                <div 
                id={`${data.cloudNine}`} 
                className={`cloudNine chairliftBar`}></div>
                <div 
                id={`${data.chair25}`}
                className={`chair25 charliftBar`}></div>
            </div>
            
        </>
    )
}

export default LiftMap