Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}


const divideBinary = () => {
  // random number between 0 and 15
  const a = [8, 9, 10, 11, 12, 13, 14, 15,].sample();
  // const bPower = 2 ^ [1, 2][Math.floor((Math.random() * 1))
  const b = [2,4].sample();

  const text = `Solve ${a.toString(2).padStart(4, '0')} ${"\u00f7"} ${b.toString(2).padStart(4, '0')} (answer in 4 bit binary).`

  const answerType = 'short'
  const isCorrect = (ans) => ans == (Math.floor(a / b)).toString(2).padStart(4, '0');
  return {text, isCorrect, answerType}
}


export default divideBinary;