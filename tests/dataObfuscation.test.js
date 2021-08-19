const dataObfuscation = require("../src/dataObfuscation");

describe("dataObfuscation function", () => {
  describe("should throw error", () => {
    test("if input is not supplied", () => {
      let errorMessage = "";
      try {
        dataObfuscation();
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in email or phone format, but receive a different type"
      );
    });

    test("if input is not a string", () => {
      let errorMessage = "";
      try {
        dataObfuscation(44123456789);
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in email or phone format, but receive a different type"
      );
    });

    test("if input is neither an email not a phone number", () => {
      let errorMessage = "";
      try {
        dataObfuscation("not-email-nor-phone");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in email or phone format, but receive a different type"
      );
    });

    test("if input is an invalid email", () => {
      let errorMessage = "";
      try {
        dataObfuscation("foo@bar");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in email or phone format, but receive a different type"
      );
    });

    test("if input is an invalid phone number", () => {
      let errorMessage = "";
      try {
        dataObfuscation("123 456 +7890");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in email or phone format, but receive a different type"
      );
    });

    test("if input is an phone number with less than 9 digit", () => {
      let errorMessage = "";
      try {
        dataObfuscation("123 456 78");
      } catch (error) {
        errorMessage = error;
      }
      expect(errorMessage).toBe(
        "Expect string in email or phone format, but receive a different type"
      );
    });
  });

  describe("should return the obfuscated information", () => {
    test("if input is an email with local-part shorter than 5 characters", () => {
      expect(dataObfuscation("foo@bar.com")).toBe("f*****o@bar.com");
    });

    test("if input is an email with local-part longer than 5 characters", () => {
      expect(dataObfuscation("foofoobarbar@bar.com")).toBe("f*****r@bar.com");
    });

    test("if input is an phone number with a plus sign", () => {
      expect(dataObfuscation("+44 123 456 789")).toBe("+**-***-**6-789");
    });

    test("if input is an phone number without a plus sign", () => {
      expect(dataObfuscation("44 123 456 789")).toBe("**-***-**6-789");
    });

    test("if input is an phone number ends with 4 number digits", () => {
      expect(dataObfuscation("44 123 45 6789")).toBe("**-***-**-6789");
    });
  });
});
