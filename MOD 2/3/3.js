let dogs = [];

for (let i = 0; i < 6; i++) {
    let name = prompt(`Enter the name of dog ${i + 1}:`);
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

document.write("<h2>Dog name is reverse alphabetical order:</h2>");
document.write("<ul>")
for (let i = 0; i < dogs.length; i++) {
    document.write(`<li>${dogs[i]}</li>`);
}
document.write("</ul>");