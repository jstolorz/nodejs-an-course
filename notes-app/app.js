const yargs = require('yargs')
const notes = require('./notes')
const log = console.log

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: () => log('list notes')
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => log('read a note')
})




yargs.parse()