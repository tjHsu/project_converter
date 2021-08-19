const ordinalNumberConverter = require("../src/ordinalNumberConverter");

describe("ordinalNumberConverter function", () => {
  describe("should throw error", () => {
    test("if input is not supplied", () => {
      try {
        ordinalNumberConverter();
      } catch (error) {
        expect(error).toBe("Expect integer, but receive non integer type");
      }
    });

    test("if input is not integer", () => {
      try {
        ordinalNumberConverter(1.1);
      } catch (error) {
        expect(error).toBe("Expect integer, but receive non integer type");
      }
    });
  });

  describe("should return an ordinal number string", () => {
    test("if input is zero", () => {
      const result = ordinalNumberConverter(0);
      expect(typeof result).toBe("string");
      expect(result).toBe("0th");
    });

    test("if input is one of exceptions, i.e. 11, 12 , and 13", () => {
      expect(ordinalNumberConverter(11)).toBe("11th");
      expect(ordinalNumberConverter(12)).toBe("12th");
      expect(ordinalNumberConverter(13)).toBe("13th");
    });

    test("if input is one of the other natural numbers", () => {
      expect(ordinalNumberConverter(1)).toBe("1st");
      expect(ordinalNumberConverter(2)).toBe("2nd");
      expect(ordinalNumberConverter(3)).toBe("3rd");
      expect(ordinalNumberConverter(20)).toBe("20th");
      expect(ordinalNumberConverter(21)).toBe("21st");
      expect(ordinalNumberConverter(22)).toBe("22nd");
      expect(ordinalNumberConverter(23)).toBe("23rd");
      expect(ordinalNumberConverter(24)).toBe("24th");
      expect(ordinalNumberConverter(100)).toBe("100th");
      expect(ordinalNumberConverter(101)).toBe("101st");
      expect(ordinalNumberConverter(102)).toBe("102nd");
      expect(ordinalNumberConverter(103)).toBe("103rd");
      expect(ordinalNumberConverter(104)).toBe("104th");
    });
  });
});
