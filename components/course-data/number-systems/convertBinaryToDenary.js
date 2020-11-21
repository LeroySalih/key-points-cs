const convertBinaryToDenary = () => {
  // random number between 0 and 15
  const a = Math.round((Math.random() * 15))

  const text = `Convert ${a.toString(2).padStart(4, '0')} to Denary.`

  const answerType = 'short'
  const isCorrect = (ans) => ans == a;
  return {text, isCorrect, answerType}
}


export default convertBinaryToDenary;