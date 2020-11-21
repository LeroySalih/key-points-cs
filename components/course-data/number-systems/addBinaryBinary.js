const addBinaryBinary = () => {
  // random number between 0 and 15
  const a = Math.round((Math.random() * 8))
  const b = Math.round((Math.random() * 7))

  const text = `Solve ${a.toString(2).padStart(4, '0')} + ${b.toString(2).padStart(4, '0')} (answer in 4 bit binary).`

  const answerType = 'short'
  const isCorrect = (ans) => ans == (a + b).toString(2).padStart(4, '0');
  return {text, isCorrect, answerType}
}


export default addBinaryBinary;