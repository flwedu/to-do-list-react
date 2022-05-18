// @ts-nocheck
import React, { useEffect, useState } from "react"
import InputField from "./components/InputField"
import NotesList from "./components/NotesList"
import NoteObject from "./model/NoteObject.js"
import LocalStorageService from "./service/local-storage.js"

function App() {
  const storage = new LocalStorageService("notes")

  const [notes, setNotes] = useState(storage.load())

  useEffect(() => {
    storage.save(notes)
  }, [notes])

  /**
   * @param {string} text
   */
  function addNoteCallback(text) {
    const note = new NoteObject(text)
    setNotes([...notes, note])
  }

  /**
   * @param {string} id
   */
  function doneCallback(id) {
    const note = notes.find((el) => el.id === id)
    if (note) {
      note.done = !note.done
      setNotes(notes)
      storage.save(notes)
    }
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
