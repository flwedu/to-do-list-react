import React from "react"
import useNotesContext from "../hooks/context/use-notes-context"
import NoteObject from "../model/NoteObject"
import { Note } from "./Note"

export default function NotesList() {
  const { notes } = useNotesContext()

  /**
   * @param {NoteObject} note
   */
  function renderNote(note) {
    return <Note key={note.id} note={note} />
  }

  return (
    <div className="NotesList">
      <ul>{notes.map(renderNote)}</ul>
    </div>
  )
}
