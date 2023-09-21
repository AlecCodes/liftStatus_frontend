import {Link} from 'react-router-dom'

function Home(){
    const today = new Date()
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(today.getDate() - 7)



    return (
        <div className='landingPage'>
            <p>Today's Date: {today.toLocaleDateString()}</p>

            <Link to={`showWeek/${today}/${sevenDaysAgo}`}>SEE LAST WEEK</Link>
            
        </div>
    )
}

export default Home;