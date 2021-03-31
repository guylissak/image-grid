import { generateArrayOfFiveRandomNumbers } from "../common/utils";

describe("Unit tests", () => {
  const srcArr = [0, 30, 77, 119, 8];
  it("Test A - Given source array of 5 elements between 0 to 120 and max random number 120 (excluded) check no duplicates", () => {
    const newRandNumbersArr = generateArrayOfFiveRandomNumbers(srcArr, 120);
    newRandNumbersArr.forEach((randNum) => {
      expect(srcArr).not.toContain(randNum);
    });
  });

  it("Test B - Repeat test A 20 times", () => {
    for (let i = 0; i < 20; i++) {
      const newRandNumbersArr = generateArrayOfFiveRandomNumbers(srcArr, 120);
      newRandNumbersArr.forEach((randNum) => {
        expect(srcArr).not.toContain(randNum);
      });
    }
  });

  it("Test C - Given source array of 5 elements between 0 to 10 and max random number 10 (excluded) check no duplicates", () => {
    // The goal of this test is to reduce the probability of new random number, this will show the stability of the algo.
    const smallRangeArr = [5, 3, 7, 8, 9];
    for (let i = 0; i < 10; i++) {
      const newRandNumbersArr = generateArrayOfFiveRandomNumbers(smallRangeArr, 10);
      newRandNumbersArr.forEach((randNum) => {
        expect(smallRangeArr).not.toContain(randNum);
      });
    }
  });

  it("Test D - Given source array of 5 elements between 0 to 10 but max random number < array.length * 2", () => {
    // Max random number < (arr.length * 2), hence there must be duplicates so algorithm returns empty array.
    const arr = [5, 2, 6, 9, 7];
    const newRandNumbersArr = generateArrayOfFiveRandomNumbers(arr, 7);
    expect(newRandNumbersArr.length).toEqual(0);
  });
});
