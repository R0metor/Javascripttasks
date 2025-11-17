let numbers = [];

while(true) {
    let num = Number(prompt("Enter a number:"));

    if (numbers.includes(num)) {
        break;
    }
    numbers.push(num);
}

numbers.sort(function (a, b) {
    return a - b;
});

console.log("Numbers from smallest to largest:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
