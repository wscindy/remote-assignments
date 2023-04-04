function calculate(args) {
    // your code here
    var output = []



    num1 = Object.values(args)[0]
    num2 = Object.values(args)[1]
    operators = Object.values(args)[2]




    if (operators === '+' || operators === '-') {

        output = eval(num1 + operators + num2)



    } else {
        output = 'Not supported'
    }

    return output

}
console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5 
console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3 
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'