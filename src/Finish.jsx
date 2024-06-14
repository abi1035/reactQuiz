function Finish({points,maxPossiblePoints,highScore,dispatch}) {

    const percentage=(points*maxPossiblePoints)/1000
     return (
        < >
            <p className="result">You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)</p>

            <p className="highscore"> (Highscore : {highScore} points)</p>

            <button className="btn btn-ui" onClick={()=>dispatch({type:"restart"})}>Restart Quiz</button>

        </>
    )
}

export default Finish
