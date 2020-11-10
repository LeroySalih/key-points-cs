import {useState, cloneElement} from 'react';


const Question = ({text, children, key}) => {

  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter (counter + 1);
  }

  const handleClick = () => {
    console.log('Clicked')

    // fetch with user, key 
    
  }

  console.log(children)
  return <div>
      <div>{text}</div>
      {children.map((answer, index) => <button key={index} onClick={handleClick}>{answer.props.text}</button>)}
      <button>Submit</button>
    </div>
}

export default Question;