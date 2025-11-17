let count = Number(prompt("Enter the number of participants: "));
let participants = [];

for (let i = 0; i < count; i++) {
    let name = prompt(`Enter the name of the participants ${i +1}:`);
    participants.push(name)
}

participants.sort();

document.write("<h2> Participants in alphabetical order:</h2>");
document.write("<ol>");
for (let i = 0; i < participants.length; i++) {
    document.write(`<li>${participants[i]}</li>`);
}
document.write("</ol>")