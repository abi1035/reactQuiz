function Question({question, dispatch,answer,points}) {

    // console.log(question)
    // console.log(answer)

    return (
        <div>
            <h4>{question.question}</h4>
            <div className="options">
            <Option question={question} dispatch={dispatch} answer={answer}/>
            </div>
        </div>
    )
}

function Option({question,dispatch,answer,points}){

    const hasAnswered=answer!==null
    
    return(
        <div className="options">
        {question.options.map((option, index)=>

        <button 
        disabled={hasAnswered}
        className={`btn btn-option ${index==answer ? "answer": "" } ${hasAnswered ? question.correctOption==index ? "correct":"wrong":""}`}
         key={option} onClick={()=>dispatch({type:"newAnswer", payload:index})}>
        {option}
        </button>)}
        </div>
)
}

export default Question
