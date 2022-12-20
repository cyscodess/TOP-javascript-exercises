const removeFromArray = function(...args) {
	return args[0].filter(num => !args.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
