import { createContext, useEffect, useState } from "react"
import NoteObject from "../model/NoteObject.js"
import LocalStorageService from "../service/local-storage.js"

const NotesContext = createContext()
/**
 * Exposes a provider to NotesContext
 * @param {{children: JSX.Element; storage: LocalStorageService;}} param0
 */
export default function NotesContextProvider({ children, storage }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    storage.save(notes)
  }, [notes])

  /**
   * @param {string} text
   */
  function addNoteWithText(text) {
    const note = new NoteObject(text)
    setNotes([...notes, note])
  }

  /**
   * @param {string} id
   */
  function switchNoteStatus(id) {
    const note = notes.find((el) => el.id === id)
    if (note) {
      note.done = !note.done
      setNotes(notes)
      storage.save(notes)
    }
  }

  /**
   * @param {string} id
   */
  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <NotesContext.Provider
      value={{ notes, addNoteWithText, switchNoteStatus, deleteNote }}
    >
      {children}
    </NotesContext.Provider>
  )
}
