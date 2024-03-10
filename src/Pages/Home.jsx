import {Link, useLoaderData} from 'react-router-dom'

function Home(){
    const snapshot = useLoaderData()
//    console.log(snapshot)
    
    
    const today = new Date()
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(today.getDate() - 7)





    return (
        <div className='landingPageContainer'>
            <div className='landingPageIsland'>
                <div>
                    <Link
                        id='landingButton' 
                        to={`showMonth/${today.getMonth() + 1}/${today.getFullYear()}`}>Lift History</Link>

                    <Link
                    id='landingButton'
                    to={`mapView/${snapshot._id}`}
                    >
                    Live Lift Map
                    </Link>
                </div>

                <p>by Alec Hannaford | Today's Date: {today.toLocaleDateString()}</p>
                
            </div>
        </div>
    )
}

export default Home;