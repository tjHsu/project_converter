# Project-Converter

## Install Packages

```bash
npm install
```

## Test

```bash
npm test
```

## Usage

1. A function that takes an Integer and returns it as a string with the correct ordinal indicator suffix (in English).

```javascript
const ordinalNumberConverter = require("./src/ordinalNumberConverter");

ordinalNumberConverter(1); //=> 1st
```

2. A function that takes two dates (date_from, date_to, in dd-mm-yyyy format) and returns the number of Sundays in that range.

```javascript
const sundaysCounter = require("./src/sundaysCounter");

sundaysCounter("01-05-2021", "30-05-2021"); //=> 5
```

3. Mask personal information: create a function that takes a String as input and returns it partly obfuscated. The function only recognizes emails and phone numbers, any other String that doesn’t match these types results in an error.

- Emails: emails need to be in a valid email format. To obfuscate it, it should be converted to lowercase and all characters in the local-part between the first and last should be replaced by 5 asterisks (\*).
- Phone numbers: a phone number consists of at least 9 digits (0-9) and may contain these two characters (‘ ‘, ‘+’) where ‘+’ is only accepted when is the first character. To obfuscate it, spaces (‘ ‘) are converted to dashes (‘-’), any digit is converted to an asterisk (‘\*’) except for the last 4, which remain unchanged and the plus sign (‘+’) also remains unchanged (if present).

```javascript
const dataObfuscation = require("./src/dataObfuscation");

dataObfuscation("local-part@domain-name.com"); //=> "l*****t@domain-name.com"
dataObfuscation("+44 123 456 789"); //=> "+**-***-**6-789"
```
