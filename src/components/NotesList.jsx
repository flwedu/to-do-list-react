import React from "react"
import NoteObject from "../model/NoteObject"
import { Note } from "./Note"

/**
 *
 * @param {{notes: NoteObject[], doneCallback: (id: string) => void}} param0
 * @returns
 */
export default function NotesList({ notes, doneCallback }) {
  /**
   * @param {NoteObject} note
   */
  function renderNote(note) {
    return <Note key={note.id} note={note} doneCallback={doneCallback} />
  }

  return (
    <div className="NotesList">
      <ul>{notes.map(renderNote)}</ul>
    </div>
  )
}
