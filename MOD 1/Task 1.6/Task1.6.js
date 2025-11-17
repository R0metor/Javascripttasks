const proceed = confirm("Should I calculate the square root?");
if (proceed) {
    const input = prompt("Give a number:");
    const n = Number(input);

    if (Number.isNaN()) {
        document.write("That is not a number.");
    } else if (n < 0) {
        document.write("The squar root of a negative number is not defined");
    } else {
        document.write(`The square root of ${n} is ${Math.sqrt(n)}`);
    }
} else {
    document.write("The square root is not calculated");
}