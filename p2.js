var i = 1;
var j = 2;
var sum = 2; 
/* sum starts at 2 because the for loop does not calculate
the initial variables '1' and '2'. */

for (var k = i + j; k < 4000000; k = i + j) {
    if (k % 2 === 0) {
		sum += k;
    }
	i = j;
	j = k;
}

console.log(sum);