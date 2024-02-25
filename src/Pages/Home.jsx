import {Link, useLoaderData} from 'react-router-dom'

function Home(){
    const snapshot = useLoaderData()
    console.log(snapshot)
    
    
    const today = new Date()
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(today.getDate() - 7)





    return (
        <div className='landingPageContainer'>
            <div className='landingPageIsland'>
                <Link
                    id='enterButton' 
                    to={`showMonth/${today.getMonth() + 1}/${today.getFullYear()}`}>Enter</Link>

                <Link
                to={`mapView/${snapshot._id}}`}
                >
                See Lift status
                </Link>

                <p>by Alec Hannaford | Today's Date: {today.toLocaleDateString()}</p>
                
            </div>
        </div>
    )
}

export default Home;