type GenerateRandomNumber = (min: number, max: number) => number;
type GenerateRandomColor = () => string;

export const generateRandomNumber: GenerateRandomNumber = function (min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

export const generateRandomColor: GenerateRandomColor = function () {
  const numberOne = generateRandomNumber(0, 255);
  const numberTwo = generateRandomNumber(0, 255);
  const numberThree = generateRandomNumber(0, 255);

  return `rgb(${numberOne}, ${numberTwo}, ${numberThree})`;
};
