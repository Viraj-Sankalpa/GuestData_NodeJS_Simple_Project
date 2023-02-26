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
    const guests = loadGuest();
    const guestIndex = guests.findIndex((guest)=>{
        return guest.id === id;
    });
    // console.log(guestIndex);

    if(guestIndex != -1){
        const guest = guests[guestIndex];
        // if(name){
        //     console.log(name);
        // }else{
        //     console.log(chalk.red("No name"));
        // }

        guest.name = name ? name:guest.name;
        guest.address = address ? name:guest.address;
        guest.contact = contact ? contact:guest.contact;
        guest.visit_date = visit_date ? visit_date:guest.visit_date;

        console.log(chalk.yellowBright("Record Updated ",id));
        saveGuest(guests);
    }else{
        console.log(chalk.red("No record found"));
    }
    
}

const deleteGuest=(id)=>{
    const guests = loadGuest();
    const newGuests= guests.filter((guest)=>{
        return guest.id != id;
    });

    if(guests.length > newGuests.length){
        saveGuest(newGuests);
    console.log(chalk.red("Delete",id));
    }else{
        console.log(chalk.red.inverse("Can't find the record"));
    }

}

const readGuest=(id)=>{
    const guests = loadGuest();
    const guest = guests.find((guest)=>{
        return guest.id ==id;
    });

    if(guest){
        console.log(chalk.blue.inverse(guest.name));
    }else{
        console.log(chalk.red.inverse("Can't find the user"));
    }
}

const listGuest=()=>{
    console.log(chalk.magenta("List"));
    const guests = loadGuest();
    guests.forEach((guest)=>{
        console.log(guest);
    })

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
 