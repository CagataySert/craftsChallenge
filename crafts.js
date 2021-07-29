//#region HANDLERS BASED ON DECIMAL PLACE
const handleOnesDigit = (number, romanNumerals) => {
  if (number === 4) {
    return romanNumerals.push("IV");
  }

  if (number === 5) {
    return romanNumerals.push("V");
  }

  if (number === 9) {
    return romanNumerals.push("IX");
  }

  if (number < 5) {
    let willBeInsertedRomanNumeral = "";

    for (let idx = 0; idx < number; idx++) {
      willBeInsertedRomanNumeral += "I";
    }

    return romanNumerals.push(willBeInsertedRomanNumeral);
  }

  if (number > 5) {
    const remainingNum = number - 5;
    let willBeInsertedRomanNumeral = "V";

    for (let idx = 0; idx < remainingNum; idx++) {
      willBeInsertedRomanNumeral += "I";
    }

    return romanNumerals.push(willBeInsertedRomanNumeral);
  }
};

const handleTensDigit = (number, romanNumerals) => {
  const multipliedNumberByDecimal = number * 10;

  if (multipliedNumberByDecimal === 40) {
    return romanNumerals.push("XL");
  }

  if (multipliedNumberByDecimal === 50) {
    return romanNumerals.push("L");
  }

  if (multipliedNumberByDecimal === 90) {
    return romanNumerals.push("XC");
  }

  if (multipliedNumberByDecimal < 50) {
    let willBeInsertedRomanNumeral = "";

    for (let idx = 0; idx < number; idx++) {
      willBeInsertedRomanNumeral += "X";
    }

    return romanNumerals.push(willBeInsertedRomanNumeral);
  }

  if (multipliedNumberByDecimal > 50) {
    const remainingNum = (multipliedNumberByDecimal - 50) / 10;

    let willBeInsertedRomanNumeral = "L";

    for (let idx = 0; idx < remainingNum; idx++) {
      willBeInsertedRomanNumeral += "X";
    }

    return romanNumerals.push(willBeInsertedRomanNumeral);
  }
};

const handleHundredsDigit = (number, romanNumerals) => {
  const multipliedNumberByDecimal = number * 100;

  if (multipliedNumberByDecimal === 400) {
    return romanNumerals.push("CD");
  }

  if (multipliedNumberByDecimal === 500) {
    return romanNumerals.push("D");
  }

  if (multipliedNumberByDecimal === 900) {
    return romanNumerals.push("CM");
  }

  if (multipliedNumberByDecimal < 500) {
    let willBeInsertedRomanNumeral = "";

    for (let idx = 0; idx < number; idx++) {
      willBeInsertedRomanNumeral += "C";
    }

    return romanNumerals.push(willBeInsertedRomanNumeral);
  }

  if (multipliedNumberByDecimal > 500) {
    const remainingNum = (multipliedNumberByDecimal - 500) / 100;

    let willBeInsertedRomanNumeral = "D";

    for (let idx = 0; idx < remainingNum; idx++) {
      willBeInsertedRomanNumeral += "C";
    }

    return romanNumerals.push(willBeInsertedRomanNumeral);
  }
};

const thousandsDigit = (number, romanNumerals) => {
  let willBeInsertedRomanNumeral = [];

  for (let idx = 0; idx < number; idx++) {
    willBeInsertedRomanNumeral += "M";
  }

  return romanNumerals.push(willBeInsertedRomanNumeral);
};
//#endregion

const decimalPlaceFuncsMappedByIndex = {
  0: handleOnesDigit,
  1: handleTensDigit,
  2: handleHundredsDigit,
  3: thousandsDigit,
};

const convertIntToRomanNumeral = (number, idx, romanNumerals) => {
  const handlerBasedOnDecimalPlace = decimalPlaceFuncsMappedByIndex[idx];

  handlerBasedOnDecimalPlace(number, romanNumerals);
};

const converIntToRomanNum = (input) => {
  if (!Number.isInteger(input)) {
    throw Error("Input must be integer!");
  }

  if (input > 3999) {
    throw Error("Input must be lower than 4999!");
  }

  let romanNumerals = [];
  const splittedInt = (input + "").split("").reverse();

  splittedInt.forEach((num, idx) => {
    convertIntToRomanNumeral(parseInt(num), idx, romanNumerals);
  });

  const inputAsRomanNumerals = romanNumerals.reverse().join("");

  console.log({ RESULT: inputAsRomanNumerals });

  return inputAsRomanNumerals;
};

// comment out below line to test function
// converIntToRomanNum(3098);
