const fs = require("fs")
const chalk = require("chalk");

const addNote = (title , body) => {



    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote){
        const newNotes = [{ title, body }, ...notes];
        console.log(chalk.green.inverse("New note Note Added"));
        return storeNotes(newNotes)
    } else{
        console.log(chalk.red.inverse("note title is taken!"));
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note)=> note.title !== title) 
    storeNotes(newNotes);
    if (newNotes.length < notes.length){
        console.log(chalk.green.inverse("note is removed"));
    }else{
        console.log(chalk.red.inverse("there is no note with this title"));
    } 
}

const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find((note)=>{
        return note.title === title
    })
    if(!!note){
        console.log("title:" , chalk.blue.bold(note.title))
        console.log("body:" , note.body)
    }else{
        console.log(chalk.red.inverse("note not found"))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("Your notes"));
    notes.forEach((note)=>{
        console.log(note.title)
    })
}



// --------- //
// --utils-- //
// --------- //

// loading notes from json file
const loadNotes = ()=>{
        // try catch 
    // if any thing in try block didn't work as expected it will stop and run catch 

    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJson = dataBuffer.toString()
        const notes = JSON.parse(dataJson)

        return notes
    } catch (e) {
        return []
    }        
}
// saving notes to a json file
const storeNotes = (notes) => fs.writeFileSync("notes.json" , JSON.stringify(notes))
// ------ //


module.exports = {
  listNotes,
  addNote,
  removeNote,
  readNotes
};