function LiftMap(props){
    console.log(props.liftReportData)
    return(
        <>
            <h1>LIFTMAPP</h1>
            <div>
                <img id = "liftMap" src="https://imgur.com/I4yb0G5.png"/>
                <div className="chairliftBars"></div>
            </div>
            
        </>
    )
}

export default LiftMap