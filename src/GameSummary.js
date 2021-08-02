import { Link } from 'react-router-dom';



const GameSummary = ({ listOfUsers }) => {
    return (
        <div>
            <h2>Game Summary!</h2>
            <div className="playerContainer">
                {listOfUsers.map((userObj) => {
                    return (
                        <div className="summaryProfile">
                            <img src={userObj.avatarImg} alt={userObj.username}/>
                            <p>{userObj.username}</p>
                            <p>{userObj.points}</p>
                        </div>
                    )
                })} 

                
            {/* // all scores 
        // announce the winner
        // button for play again? and another for main */}
        <Link to='/'>Home</Link>
        <Link to='/lobby'>Play Again</Link>
        <Link to='/leaderboard'>Leaderboard</Link>
            </div>
        </div>
    )
}

export default GameSummary