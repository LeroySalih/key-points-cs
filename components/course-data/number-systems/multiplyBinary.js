Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}


const multiplyBinary = () => {
  // random number between 0 and 15
  const a = [1,2,3,4].sample();
  // const bPower = 2 ^ [1, 2][Math.floor((Math.random() * 1))
  const b = [2,4].sample();

  const text = `Solve ${a.toString(2).padStart(4, '0')} x ${b.toString(2).padStart(4, '0')} (answer in 4 bit binary).`

  const answerType = 'short'
  const isCorrect = (ans) => ans == (a * b).toString(2).padStart(4, '0');
  return {text, isCorrect, answerType}
}


export default multiplyBinary;