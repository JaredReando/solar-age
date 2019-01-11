import { Age } from './../src/age';


describe('Age', function() {
  let newHaiku;

  beforeEach(function() {
    newHaiku = new Haiku("first", "second", "third");
  });

  it("creates a new Haiku object", function() {
    expect(newHaiku.lineOne).toEqual("first");
  });

  it("converts a string into an array from line breaks", function() {
    let inputString = "this\nis\nstring";
    expect(newHaiku.newFromString(inputString)).toEqual(["this", "is", "string"]);
  });

  it("counts the number of vowels in a given string", function() {
    expect(newHaiku.vowelCount(newHaiku.lineOne, 'v')).toEqual(1);
  });

  it("counts the number of consonants in a given string", function() {
    expect(newHaiku.vowelCount(newHaiku.lineOne, 'c')).toEqual(4);
  });

  it("counts the number of vowel pairs in a given string", function() {
    expect(newHaiku.vowelFriendsCount('cheese')).toEqual(1);
  });

  it("subtracts the number of multi-vowel occurrences from total vowel count.", function() {
    expect(newHaiku.syllableCount("scooter")).toEqual(2);
  });

});
