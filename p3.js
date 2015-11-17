var curPrime = 2;
var value = 600851475143;
var largestPrime;

var isPrime = function(num) {
	for (var i = 2; i < num ; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

var findNextPrime = function(num) {
	num += 1;
	while (isPrime(num) === false) {
		num++;
	}
	return num;
};

/* ORIGINAL SOLUTION

while (curPrime <= value) {
	if (value % curPrime === 0) {
		largestPrime = curPrime;
		curPrime = findNextPrime(curPrime);
	}
	else {
		curPrime = findNextPrime(curPrime);
	}
} 

*/

//Much better solution

while (curPrime <= value) {
	if (value % curPrime === 0) {
		value = value / curPrime;
		largestPrime = curPrime;
		curPrime = 2;
	}
	else {
		curPrime = findNextPrime(curPrime);
	}
}

console.log(largestPrime);