//call guestDB.js

const yargs = require('yargs');
const db = require("./guestDB");

yargs.version("1.1.2");

//add guest
yargs.command({
    
    command:"add",
    handler(argv){
        db.addGuest(argv.name,argv.address,argv.contact,argv.visit_date);
    },
    builder:{
        name:{
            describe:"Name",
            demandOption:true,
            type: "string"
        },
        address:{
            describe:"Address",
            demandOption:true,
            type: "string"
        },
        contact:{
            describe:"Telephone number",
            demandOption:true,
            type: "number"
        },
        visit_date:{
            describe:"Visit Date",
            demandOption:true,
            type: "string"
        },
    }
    
})


//update guest
yargs.command({
    command:"update",
    handler(argv){
        db.updateGuest(argv.id,argv.name,argv.address,argv.contact,argv.visit_date);
    },
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type: "number"
        },
        name:{
            describe:"Name",
          
            type: "string"
        },
        address:{
            describe:"Address",
          
            type: "string"
        },
        contact:{
            describe:"Telephone number",
          
            type: "number"
        },
        visit_date:{
            describe:"Visit Date",
         
            type: "string"
        },
    }
    
})

//delete guest
yargs.command({
    command:"delete",
    handler: function(argv){
        db.deleteGuest(argv.id);
    },
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type: "number"
        }
    }
    
})

//read guest
yargs.command({
    command:"read",
    handler: function(argv){
        db.readGuest(argv.id);
    },
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type: "number"
        }
    }
    
})

//geting guest list
yargs.command({
    command:"list",
    handler: function(){
        db.listGuest();
    }

    
})

console.log(yargs.argv);

