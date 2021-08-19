const validator = require("validator");

const isInvalidFormat = (input) => {
  const isNotString = (input) => {
    return typeof input !== "string";
  };

  const isInValidEmail = (email) => {
    return !validator.isEmail(email);
  };
  const isInValidPhoneNumber = (phoneNumber) => {
    const phoneNumberChars = phoneNumber.split("");
    if (phoneNumberChars[0] === "+") phoneNumberChars.shift();

    const validChars = [];
    const allowedChars = " 0123456789";
    let digitCounter = 0;
    phoneNumberChars.map((char) => {
      if (allowedChars.includes(char)) validChars.push(char);
      if (char !== " " && allowedChars.includes(char)) digitCounter += 1;
    });

    if (phoneNumberChars.length !== validChars.length) {
      return true;
    } else if (digitCounter < 9) {
      return true;
    } else {
      return false;
    }
  };

  return (
    isNotString(input) || (isInValidEmail(input) && isInValidPhoneNumber(input))
  );
};

const dataObfuscation = (personalInformation) => {
  if (isInvalidFormat(personalInformation)) {
    throw "Expect string in email or phone format, but receive a different type";
  } else if (personalInformation.includes("@")) {
    const firstChunkOfEmail = personalInformation.charAt(0);
    const indexOfSecondChunk = personalInformation.indexOf("@") - 1;
    const secondChunkOfEmail = personalInformation.slice(indexOfSecondChunk);

    return firstChunkOfEmail.concat("*****", secondChunkOfEmail);
  } else {
    const phoneNumberChars = personalInformation
      .replace(/ /g, "-")
      .split("")
      .reverse();

    const obfuscatedPhoneNumberChars = [];
    let digitCounter = 0;

    phoneNumberChars.map((char) => {
      if (isNaN(Number(char))) {
        obfuscatedPhoneNumberChars.push(char);
      } else if (digitCounter > 3) {
        obfuscatedPhoneNumberChars.push("*");
      } else {
        digitCounter += 1;
        obfuscatedPhoneNumberChars.push(char);
      }
    });

    return obfuscatedPhoneNumberChars.reverse().join("");
  }
};

module.exports = dataObfuscation;
