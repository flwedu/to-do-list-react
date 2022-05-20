import React from "react"
import useNotesContext from "../hooks/context/use-notes-context.jsx"

/**
 *
 * @param {{noteId: string}} param0
 * @returns
 */
export default function DeleteButton({ noteId }) {
  const { deleteNote } = useNotesContext()

  function handleClick() {
    deleteNote(noteId)
  }

  return <button onClick={handleClick}> X </button>
}
