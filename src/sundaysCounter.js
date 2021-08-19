const isInvalidDateFormat = (date) => {
  const isInvalidDay = (day) => isNaN(day) || day < 1 || day > 31;
  const isInvalidMonth = (month) => isNaN(month) || month < 1 || month > 12;
  const isInvalidYear = (year) => isNaN(year) || year < 1;

  if (typeof date !== "string") {
    return true;
  } else {
    const dateArray = date.split("-").map((date) => Number(date));
    if (dateArray.length !== 3) return true;

    const [day, month, year] = dateArray;
    if (isInvalidDay(day) || isInvalidMonth(month) || isInvalidYear(year))
      return true;

    return false;
  }
};

const weekPassed = (startDate, endDate) => {
  const msPassed = endDate.getTime() - startDate.getTime();
  const dayPassed = msPassed / 86400000;
  const weekPassed = Math.floor(dayPassed / 7);
  return weekPassed;
};

const getUTCDate = (date) => {
  const [day, month, year] = date.split("-").map((date) => Number(date));
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  return utcDate;
};

const sundaysCounter = (dateFrom, dateTo) => {
  if (isInvalidDateFormat(dateFrom) || isInvalidDateFormat(dateTo)) {
    throw "Expect string in dd-mm-yyyy format, but receive a different type";
  }

  const startDate = getUTCDate(dateFrom);
  const endDate = getUTCDate(dateTo);
  if (startDate.getTime() > endDate.getTime()) {
    throw "End date should not be earlier than start date";
  }

  const startWeekDay = startDate.getDay();
  const endWeekDay = endDate.getDay();


  //epoch 1970 Jan 1st. 00:00:00:000 UTC KNOWN Thursday
  const epochDate = getEpoch()
  const startWeekDay =  (Math.floor(( startDate - epochDate ) / 86400)) % 7 =>
   0: Thursday (+7)
   1: Friday
   2: Sat
   3: Sun
   4: Mon
   5: Tue
   6: Wed

  const totalWeekPassed = weekPassed(startDate, endDate);

  let totalSundays = startWeekDay === 0 ? 1 : 0;
  totalSundays += totalWeekPassed;
  if (endWeekDay < startWeekDay) totalSundays += 1;

  return totalSundays;
};

module.exports = sundaysCounter;
