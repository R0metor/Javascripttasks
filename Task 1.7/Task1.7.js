const times = Number(prompt("How many dice rolls?"));

if (!Number.isInteger(times) || times <= 0) {
  document.write("Please enter a positive whole number.");
} else {
  let sum = 0;
  for (let i = 0; i < times; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; // 1..6
    sum += roll;
  }
  console.log(`Sum of ${times} roll(s): ${sum}`);
  document.write(`Sum of ${times} roll(s): ${sum}`);
}
