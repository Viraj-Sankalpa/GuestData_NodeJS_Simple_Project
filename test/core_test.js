const fs = require('fs');


/*

fs.writeFileSync("data.txt","Hello"); //when run this, always create new data.txt file and add new detail
fs.appendFileSync("data.txt"," world");

//get data inside the data.txt file (read)
const data = fs.readFileSync("data.txt");
//geting output
console.log(data.toString());

*/

/*
//save
const guests=[];

guests.push({
    name:"name1",
    address:"add1"
});

// console.log(guests);
const dataJson = JSON.stringify(guests);
fs.writeFileSync("jason_data.json",dataJson);


//read
const dataBuffer = fs.readFileSync("jason_data.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataBuffer);
console.log(data);

*/