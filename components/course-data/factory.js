import convertBinaryToDenary from './number-systems/convertBinaryToDenary';
import convertDenaryToBinary from './number-systems/convertDenaryToBinary';
import addBinaryBinary from './number-systems/addBinaryBinary'
import multiplyBinary from './number-systems/multiplyBinary';
import divideBinary from './number-systems/divideBinary'

const Factory = (key) => {
  const types = {
  'convertBinaryToDenary' : convertBinaryToDenary,
  'convertDenaryToBinary' : convertDenaryToBinary,
  'addBinaryBinary' : addBinaryBinary,
  'multiplyBinary' : multiplyBinary,
  'divideBinary' : divideBinary
  }

  return types[key];
};


export default Factory;