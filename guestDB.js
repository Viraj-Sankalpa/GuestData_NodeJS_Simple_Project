const fs = require('fs');
const chalk = require('chalk');

//data save
const db_file = "data.json";

const addGuest=(name,address,contact,visit_date)=>{

    const guests=loadGuest();
    const length = guests.length;
    let id=1;
    if(length>0){
        id=guests[length-1].id+1;
    }
    guests.push({
        id,
        name,
        address,
        contact,
        visit_date
    });
    saveGuest(guests);

    console.log(chalk.green("User data added succesfully"));
}

const updateGuest=(id,name,address,contact,visit_date)=>{
    console.log(chalk.yellow("Update",id));
}

const deleteGuest=(id)=>{
    console.log(chalk.red("Delete",id));
}

const readGuest=(id)=>{
    console.log(chalk.blue("Read",id));
}

const listGuest=()=>{
    console.log(chalk.magenta("List"));
}

//saveGuest
const saveGuest=(guests)=>{
    const dataJSON =JSON.stringify(guests);
    fs.writeFileSync(db_file,dataJSON);
}

//loadGuests
const loadGuest=()=>{
    try{
        const dataBuffer = fs.readFileSync(db_file);
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    }catch(e){
        return [];

    }
    
}

module.exports = {
    addGuest,updateGuest,deleteGuest,readGuest,listGuest,
}
 