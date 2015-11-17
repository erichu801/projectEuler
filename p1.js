var sum = 0;
var value = 1000;

for (var num = 0; num < value; num++) {
	if ((num % 3) === 0 || (num % 5) === 0) {
		sum += num;
	}
}

console.log(sum);