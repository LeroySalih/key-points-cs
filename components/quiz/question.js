import factory from '../../components/course-data/factory';
import {useEffect, useState} from 'react';

const Question = ({type}) => {

  const questionFn = factory(type);
  
  const [answer, setAnswer] = useState();
  const [question, setQuestion] = useState(null);

  useEffect(()=> {
    setQuestion(questionFn())
  }, [])

  console.log('Question:', question)

  const handleCheck = (question) => {
    console.log(question.isCorrect(answer))
  }

  if (question === null)
    return (<>No question</>)
  return (<div>
      {question.text}
      {question.answerType == 'short' && 
        (<input value={answer || ''} 
                onChange={(e) => setAnswer(e.target.value)}></input>)
      }
        
      <button onClick={() => handleCheck(question)}>Check</button>
  </div>);
}

export default Question;