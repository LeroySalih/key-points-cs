import Question from './question'
import {useState} from 'react';

const Quiz = ({quiz}) => {
  
  const [quizKey, setQuizKey] = useState(0);

  console.log('Quiz::', quiz)

  if (!quiz) 
  {
    return <div>Loading</div>
  }
    

  return <>{
    quiz.map((question, index) => (
      <Question key={`${quizKey}-${index}`} type={question.type} />
    ))
  }
  <button onClick={()=>{ setQuizKey((prev) => prev + 1) }}>Reset</button>
  </>
}


export default Quiz;