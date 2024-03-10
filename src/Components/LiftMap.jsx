function LiftMap(props){

    const data = props.liftReportData.chairs
    console.log(data)

    const chairArray = Object.entries(data)
    console.log(chairArray)

    return(
        <>
            <div className="map-container">
                <img id = "liftMap" src="https://imgur.com/I4yb0G5.png"/>
                {/* Could we dynamically create these divs? */}
                {/* Use Object.entries to create a list of single field objects? */}

                {
                    chairArray.map((element, index, arr) => {

                    return (
                        <div
                        key={index}
                        id={`${element[1]}`}
                        className={`${element[0]} chairliftBar`}
                        ></div>
                    )
                    
                    })                    
                }

                {/* <div 
                id={`${data.cloudNine}`} 
                className={`cloudNine chairliftBar`}></div>
                <div 
                id={`${data.chair25}`}
                className={`chair25 charliftBar`}></div> */}

            </div>
            
        </>
    )
}

export default LiftMap