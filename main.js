function range(start, end) {
    if (start > end) {
        throw new RangeError("Start greater than end");
    }
    const range = [];
    let value = start;
    while (value < end) {
        range.push(value++);
    }
    return range;
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
console.log(bookPageCount);
