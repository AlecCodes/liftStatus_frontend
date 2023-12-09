import {Link} from 'react-router-dom'

function Home(){
    const today = new Date()
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(today.getDate() - 7)




    return (
        <div className='landingPageContainer'>
            <div className='landingPageIsland'>
                <Link
                    id='enterButton' 
                    to={`showMonth/${today.getMonth() + 1}/${today.getFullYear()}`}>Enter</Link>

                <p>by Alec Hannaford | Today's Date: {today.toLocaleDateString()}</p>
                
            </div>
        </div>
    )
}

export default Home;