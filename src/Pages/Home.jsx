import {Link} from 'react-router-dom'

function Home(){
    const today = new Date()
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(today.getDate() - 7)



    return (
        <div className='landingPage'>
            <p>Today's Date: {today.toLocaleDateString()}</p>

            <Link to={`showWeek/${sevenDaysAgo}/${today}`}>SEE LAST WEEK</Link>
            <br></br>
            <Link to={`showMonth/${today.getMonth() + 1}/${today.getFullYear()}`}>Month View</Link>
            
        </div>
    )
}

export default Home;