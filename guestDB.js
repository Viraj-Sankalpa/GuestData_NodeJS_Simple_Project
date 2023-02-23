const chalk = require('chalk');
//data save

// console.log("guestDB.js");

// const name= "viraj";
// const age = 100;

const add = ()=>{
    console.log(chalk.green.inverse("Adding.."));
}
const view = ()=>console.log(chalk.blue("View"));;




//if we want to use this name variable, we should export it
// module.exports = name;

module.exports = {
    add,
    view,
}
