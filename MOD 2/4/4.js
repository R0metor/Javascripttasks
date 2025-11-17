let numbers = [];

while (true) {
    let num = Number(prompt("Enter a number:"));

    if (num === 0) {
        break;
    }
    
    numbers.push(num);
}

numbers.sort(function(a, b) {
  return b - a;
});

console.log("Numbers from largest to smallest:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}