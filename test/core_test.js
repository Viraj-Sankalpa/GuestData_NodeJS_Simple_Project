const fs = require('fs');

fs.writeFileSync("data.txt","Hello"); //when run this, always create new data.txt file and add new detail
fs.appendFileSync("data.txt"," world");

//get data inside the data.txt file (read)
const data = fs.readFileSync("data.txt");
//geting output
console.log(data.toString());