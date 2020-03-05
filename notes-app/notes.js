const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => 'Your notes ...'

const addNotes = (title, body) => {
    const notes = loadNotes()

    const note = notes.filter((note) => note.title === title)

    if (note.length === 0) {
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
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}