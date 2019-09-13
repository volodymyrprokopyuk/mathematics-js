function range(start, end, step = 1) {
    if (start > end) {
        throw new RangeError("Start greater than end");
    }
    const range = [];
    let value = start;
    while (value < end) {
        range.push(value);
        value += step;
    }
    return range;
}

function divideWithRemainder(x, y) {
    quotient = Math.floor(x / y);
    remainder = x % y;
    return [quotient, remainder];
}

function factorial(n) {
    if (!Number.isInteger(n)) {
        throw new TypeError("Integer expected");
    }
    if (n < 1) {
        throw new TypeError("Natural number expected");
    }
    const factorial = range(1, n + 1).reduce((p, x) => p * x, 1);
    return factorial;
}

/* Problem 1.2.11 */
// [0..9] = 10 digits
const oneDigitRange = range(0, 10);
const oneDigitCount = oneDigitRange.length;
// console.log(oneDigitRange, oneDigitCount);
// 99 - 9 = 90 digits
const twoDigitRange = range(10, 100);
const twoDigitCount = twoDigitRange.length;
// console.log(twoDigitRange, twoDigitCount);
// 999 - 99 = 900 digits
const threeDigitRange = range(100, 1000);
const threeDigitCount = threeDigitRange.length;
// console.log(threeDigitRange, threeDigitCount);

/* Problem 1.2.12 */
// 9 * 1 + (99 - 9) * 2 + (148 - 99) * 3 = 336 digits
const bookPageRange = range(1, 149);
const bookPageDigitCount = bookPageRange.join("").length;
// console.log(bookPageRange, bookPageDigitCount);

/* Problem 1.2.13 */
// 9 * 1 + (99 -9) * 2 + (x - 99) * 3 = 1989
// x = 699 pages
const bookPageCount = range(1, 700).join("").length;
// console.log(bookPageCount);

/* Problem 1.4.9 */
const naturalSeries100 = range(1, 101);
const naturalSeries100Sum = naturalSeries100.reduce((s, x) => s + x, 0);
// console.log(naturalSeries100Sum);

/* Problem 1.6.17 */
const factorial15 = range(1, 16).reduce((p, x) => p * x, 1);
// console.log(factorial15);

/* Problem 1.10.7 */
const squares15 = range(1, 16).map(x => [x, x ** 2]);
// console.log(squares15);

/* Problem 1.10.8 */
const cubes10 = range(1, 11).map(x => [x, x ** 3]);
// console.log(cubes10);

/* Problem 1.10.10 */
const powers2 = range(1, 11).map(p => [2, 2 ** p]);
// console.log(powers2);

/* Problem 1.14.3 */
const quotientAndRemainder = divideWithRemainder(148, 15);
// console.log(quotientAndRemainder);

/* Problem 1.14.7 */
const factorial10 = factorial(10);
const factorial10Remainders = range(2, 11).map((x) => divideWithRemainder(factorial10 + 1, x));
const factorial10Remainder = divideWithRemainder(factorial10 + 1, 100);
console.log(factorial10Remainders);
console.log(factorial10Remainder);
