import { useEffect, useState } from "react"
import useNotesContext from "../hooks/context/use-notes-context"
import NoteObject from "../model/NoteObject"
import DeleteButton from "./DeleteButton"

export function Note({ note }: { note: NoteObject }) {
  const { switchNoteStatus } = useNotesContext()!
  const [done, setDone] = useState(note.done)

  useEffect(() => {
    switchNoteStatus(note.id, done)
  }, [done])

  function handleClick() {
    setDone(!done)
  }

  function getTimeSinceCreation() {
    const now = new Date()
    const seconds = (now.getTime() - note.createdAt) / 1000
    if (seconds < 60) return `${Math.floor(seconds)} seconds`
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes`
    return `${Math.floor(seconds / 3600)} hours`
  }

  return (
    <li onClick={handleClick}>
      <div style={{ textDecoration: done ? "line-through" : "none" }}>
        <span>{note.text}</span>
        <span> ⏳ {getTimeSinceCreation()}</span>
      </div>
      {done && <DeleteButton noteId={note.id} />}
    </li>
  )
}
