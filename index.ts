// 1. Function sum takes positive ints and returns their sum.

export function sum(...nums: Array<number>): number {
  return nums.reduce((acc, item) => acc + item, 0);
}

// 2. Function getTriangleType takes three params: triangle's lengths.
// Function should return:
//  - "10", if triangle equilateral,
//  - "01", if triangle isosceles,
//  - "11", if triangle normal,
//  - "00", if triangle does not exist.

export function getTriangleType(a: number, b: number, c: number): string {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) return "10";
    if (a === b || a === c || b === c) return "01";
    return "11";
  }

  return "00";
}

// 3. The getSum function takes an integer as a parameter and returns
// sum of digits of this number

export function getSum(number: number): number {
  return `${number}`.split("").reduce((acc, num) => acc + +num, 0);
}

// 4. The isEvenIndexSumGreater function takes the array of numbers.
// If the sum of numbers with even indices (0 as a even index) more
// then sums of numbers with odd indices, then the function returns true.
// Otherwise - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach((num, ind) => {
    if (ind === 0 || ind % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  });
  return evenSum > oddSum;
};

// 5. The getSquarePositiveIntegers function takes an array of numbers and returns a new array.
// The new array consists of squares of whole positive numbers, which are elements of the outcome massif.
// The source array does not mutate.

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
  return array
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((num) => Math.pow(num, 2));
}

// 6. The function takes the parameter not a negative integer N
// and returns the sum of all numbers from 0 to N inclusive
// Try to realize a function without using sorting methods.

export function sumFirstNumbers(N: number): number {
  return N === 0 ? N : N + sumFirstNumbers(N - 1);
}

// 7. The getBanknoteList function takes the whole natural number (sum) in the parameter.
// Returns an array with the least number of bills that can be given out this
// sum. Banknotes of the following denominations are available:
// [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// We believe that the number of banknotes of each type value is not limited.

// export function getBanknoteList(amountOfMoney: number): Array<number> {
//   const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
//   let amount = amountOfMoney;
//   const result: Array<number> = [];
//   function checker(num: number): Array<number> {
//     if (
//       banknotes.some((note) => {
//         const bool = num - note >= 0;
//         if (bool) {
//           result.push(note);
//           amount -= note;
//         }
//         return bool;
//       })
//     ) {
//       return checker(amount);
//     }
//     return result;
//   }
//   return checker(amount);
// }

export function getBanknoteList(amountOfMoney: number): Array<number> {
  const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
  let pack = 0;
  let amount = amountOfMoney;
  const result: Array<number> = [];

  function checker(num: number): Array<number> {
    if (num === 0) return result;
    const check = num - banknotes[pack] >= 0;
    if (check) {
      result.push(banknotes[pack]);
      return checker((amount -= banknotes[pack]));
    } else {
      pack++;
      return checker(num);
    }
  }

  return checker(amount);
}
