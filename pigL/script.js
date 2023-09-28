const EnglishToPigLatin = (englishWord) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];

  for (let i = 0; i < englishWord.length; i++) {
    if (vowels.includes(englishWord[i]))
      return englishWord.slice(i) + englishWord.slice(0, i) + "ay";
  }

  if (!englishWord || typeof englishWord !== "string") return "";
  englishWord = englishWord.toLocaleLowerCase();

  if (vowels.includes(englishWord[0])) {
    return englishWord + "ay";
  }

  return englishWord;
};
module.exports = EnglishToPigLatin;
console.log(EnglishToPigLatin(""));
