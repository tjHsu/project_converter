const sundaysCounter = require("../src/sundaysCounter");

describe("sundaysCounter function", () => {
  describe("should throw error", () => {
    test("if input is not supplied", () => {
      let errorMessage = "";
      try {
        sundaysCounter();
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in dd-mm-yyyy format, but receive a different type"
      );
    });

    test("if input is not a string", () => {
      let errorMessage = "";
      try {
        sundaysCounter(31012021, "01-01-2021");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in dd-mm-yyyy format, but receive a different type"
      );
    });

    test("if input is not valid dd-mm-yyyy date format", () => {
      let errorMessage = "";
      try {
        sundaysCounter("blah", "01-01-2021");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in dd-mm-yyyy format, but receive a different type"
      );

      errorMessage = "";
      try {
        sundaysCounter("blah-01-2021", "01-01-2021");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in dd-mm-yyyy format, but receive a different type"
      );
    });

    test("if input day is not valid", () => {
      let errorMessage = "";
      try {
        sundaysCounter("00-01-2021", "01-01-2021");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in dd-mm-yyyy format, but receive a different type"
      );

      errorMessage = "";
      try {
        sundaysCounter("32-01-2021", "01-01-2021");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in dd-mm-yyyy format, but receive a different type"
      );
    });

    test("if input month is not valid", () => {
      let errorMessage = "";
      try {
        sundaysCounter("01-13-2021", "01-01-2021");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in dd-mm-yyyy format, but receive a different type"
      );

      errorMessage = "";
      try {
        sundaysCounter("01-00-2021", "01-01-2021");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in dd-mm-yyyy format, but receive a different type"
      );
    });

    test("if input year is not valid", () => {
      let errorMessage = "";
      try {
        sundaysCounter("01-01-0000", "01-01-2021");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in dd-mm-yyyy format, but receive a different type"
      );
    });

    test("if end date is earlier than the start date", () => {
      let errorMessage = "";
      try {
        sundaysCounter("05-01-2021", "05-01-1991");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "End date should not be earlier than start date"
      );
    });
  });

  describe("should return the counts of sundays", () => {
    test("if the time span is shorter than 1 week", () => {
      expect(sundaysCounter("02-05-2021", "04-05-2021")).toBe(1);
    });

    test("if the time span is across diffent weeks", () => {
      expect(sundaysCounter("06-05-2021", "10-05-2021")).toBe(1);
    });

    test("if the time span is across diffent months", () => {
      expect(sundaysCounter("26-04-2021", "10-05-2021")).toBe(2);
    });

    test("if the time span is across diffent years", () => {
      expect(sundaysCounter("17-12-2021", "10-01-2022")).toBe(4);
    });

    test("if the start date is on Sunday", () => {
      expect(sundaysCounter("09-05-2021", "17-05-2021")).toBe(2);
    });

    test("if the end date is on Sunday", () => {
      expect(sundaysCounter("13-05-2021", "23-05-2021")).toBe(2);
    });

    test("if both the start date and the end date are on Sunday", () => {
      expect(sundaysCounter("09-05-2021", "23-05-2021")).toBe(3);
    });
  });
});
