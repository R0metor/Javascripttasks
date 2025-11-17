function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
let sides = Number(prompt("How many sides:"))
const list = document.getElementById("results");
let result = 0;

while (result !== sides) {
    result = rollDice(sides);

    const item = document.createElement("li");
    item.textContent = result;
    list.appendChild(item);
}