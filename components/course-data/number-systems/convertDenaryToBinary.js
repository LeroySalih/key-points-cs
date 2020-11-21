const convertDenaryToBinary = () => {
  // random number between 0 and 15
  const a = Math.round((Math.random() * 15))

  const text = `Convert ${a} to 4 bit binary number.`

  const answerType = 'short'
  const isCorrect = (ans) => ans == a.toString(2).padStart(4, '0');
  return {text, isCorrect, answerType}
}


export default convertDenaryToBinary;