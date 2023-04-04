
function max(numbers) {
    // your code here

    var theAnswer = numbers[0]

    for (let index = 1; index < numbers.length; index++) {
        if (theAnswer < numbers[index]) {
            theAnswer = numbers[index]
        }
    }

    return theAnswer

}
console.log(max([1, 2, 4, 5, 99]));
// expected output: 99
console.log(max([5, 2, 7, 8, 6]));
    // expected output: 8