const fs = require("fs")
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// add command 
yargs.command({
    command : "add",
    describe : "add new note",
    builder : {
        title : {
            describe : 'notes title',
            demandOption : true,
            type: "string"
        },
        body : {
            describe : "note body",
            demandOption : true,
            type : "string"
        }
    },
    handler(argv) { 
        notes.addNote(argv.title , argv.body)
    }
})
//remove command
yargs.command({
    command : "remove",
    describe : "remove note",
    builder : {
        title : {
            describe : "notes title",
            demandOption : true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
//edit command
yargs.command({
    command : "edit",
    describe : "edit note",
    handler() {
        console.log("edit note")
    }
})
//list command
yargs.command({
    command : "list",
    describe : "listing notes",
    handler(){ 
        notes.listNotes()
    }
})
//read command
yargs.command({
  command: "read",
  describe: "reading notes",
  builder: {
    title: {
      describe: "notes title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNotes(argv.title);
  }
});

yargs.parse()
