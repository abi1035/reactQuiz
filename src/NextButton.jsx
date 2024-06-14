function NextButton({dispatch,answer,numQuestions,index}) {

    if(answer==null) return null
   
   
   
   if(index<numQuestions-1) return (
        <div>
            <button className="btn btn-ui" onClick={()=>dispatch({type:"nextQuestion"})}>Next</button>
        </div>
    )

   if(index==numQuestions-1) return (
        <div>
            <button className="btn btn-ui" onClick={()=>dispatch({type:"finished"})}>Finish</button>
        </div>
    )
}

export default NextButton