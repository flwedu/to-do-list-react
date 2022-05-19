import { createContext, useState } from "react"
import NoteObject from "../model/NoteObject"

const NotesContext = createContext()
/**
 * Exposts a provider to NotesContext
 * @param {{children: JSX.Element; storageService: LocalStorageService;}} param0
 */
export default function NotesContextProvider({ children, storageService }) {
  const [notes, setNotes] = useState([])

  /**
   *
   * @param {NoteObject} note
   */
  function addNote(note) {
    setNotes([...notes, note])
  }

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  )
}
