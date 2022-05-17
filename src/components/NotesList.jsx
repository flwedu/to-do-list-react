import React from "react"
import { Note } from "./Note"

export default function NotesList({ notes, doneCallback }) {
  function renderNote(note) {
    return <Note key={note.id} note={note} doneCallback={doneCallback} />
  }

  return (
    <div className="NotesList">
      <ul>{notes.map(renderNote)}</ul>
    </div>
  )
}
