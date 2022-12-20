const sumAll = function(n1, n2) {
    let num1 = [n1, n2].sort()[0]
    let num2 = [n1, n2].sort()[1]
	let arr = []
	if ((!Number.isInteger(n1) || !Number.isInteger(n2)) || (n1 < 0 || n2 < 0)) return "ERROR"
    
    for (let i = num1; i <= num2; i++) {
        arr.push(num1++)
    }

    return arr.reduce((acc,curr) => acc + curr, 0)
}

// Do not edit below this line
module.exports = sumAll;
