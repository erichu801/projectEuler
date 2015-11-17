var sum = 0;

for (var num = 0; num < 1000; num++) {
	if ((num % 3) === 0 || (num % 5) === 0) {
		sum += num;
	}
}

console.log(sum);