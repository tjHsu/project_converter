const ordinalNumberConverter = (number) => {
  const exceptionalOrdinalNumber = [11, 12, 13];
  if (!Number.isInteger(number)) {
    throw "Expect integer, but receive non integer type";
  } else if (exceptionalOrdinalNumber.includes(number)) {
    return number + "th";
  } else {
    const unitsDigit = number % 10;
    switch (unitsDigit) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
      default:
        return number + "th";
    }
  }
};

module.exports = ordinalNumberConverter;
