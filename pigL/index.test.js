const EnglishToPigLatin = require("./script");

describe("EnglishToPigLatin", () => {
  test(`translate word starting with "a"`, () => {
    expect(EnglishToPigLatin("apple")).toBe("appleay");
  });
  test(`translate word starting with "e"`, () => {
    expect(EnglishToPigLatin("egg")).toBe("eggay");
  });
  test(`translate word starting with "i"`, () => {
    expect(EnglishToPigLatin("ice")).toBe("iceay");
  });
  test(`translate word starting with "o"`, () => {
    expect(EnglishToPigLatin("opal")).toBe("opalay");
  });
  test(`translate word starting with "u"`, () => {
    expect(EnglishToPigLatin("urban")).toBe("urbanay");
  });
  test(`translate word starting with "y"`, () => {
    expect(EnglishToPigLatin("yellow")).toBe("yelloway");
  });
  test(`translates word starting with "b"`, () => {
    expect(EnglishToPigLatin("banana")).toBe("ananabay");
  });

  test(`translates word starting with "c"`, () => {
    expect(EnglishToPigLatin("cat")).toBe("atcay");
  });
  test(`translates word starting with "ch"`, () => {
    expect(EnglishToPigLatin("cherry")).toBe("errychay");
  });

  test(`translates word starting with "str"`, () => {
    expect(EnglishToPigLatin("string")).toBe("ingstray");
  });

  test("converts word to lowercase", () => {
    expect(EnglishToPigLatin("APPLE")).toBe("appleay");
  });
});
