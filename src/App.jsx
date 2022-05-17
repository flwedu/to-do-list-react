import React, { useState } from "react"
import InputField from "./components/InputField"
import NotesList from "./components/NotesList"
import NoteObject from "./model/NoteObject"

function App() {
  const [notes, setNotes] = useState([])

  function addNoteCallback(text) {
    const note = new NoteObject(text)
    setNotes([...notes, note])
  }

  function doneCallback(id) {
    const note = notes.find((el) => el.id === id)
    note.done = !note.done
    setNotes(notes)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="body">
          <InputField addNoteCallback={addNoteCallback} />
          <NotesList notes={notes} doneCallback={doneCallback} />
        </div>
      </div>
    </div>
  )
}

export default App
