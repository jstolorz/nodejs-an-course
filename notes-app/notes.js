const chalk = require('chalk')
const fs = require('fs')

const addNotes = (title, body) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if (note === undefined) {
        notes.push({
            title,
            body
        })

        saveNotes(notes)
    } else {
        console.log('Note is taken!!')
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const notesAfterRemove = notes.filter((note) => note.title !== title)
    saveNotes(notesAfterRemove)
    if (notes.length === notesAfterRemove.length) {
        console.log(chalk.red.inverse('No notes found!'))
    } else {
        console.log(chalk.green.inverse('note removed!'))
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('Your notes'))
    notes.forEach((note) => console.log(note))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.blue.inverse(`Title: ${note.title}`) + ' Body: ' + note.body)
    }else{
        console.log(chalk.red.inverse(`Cannot find note with title: ${title}`))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}