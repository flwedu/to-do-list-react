import { createContext, useEffect, useState } from "react"
import NoteObject from "../model/NoteObject.js"
import LocalStorageService from "../service/local-storage.js"

const NotesContext = createContext()
/**
 * Exposes a provider to NotesContext
 * @param {{children: JSX.Element; storage: LocalStorageService;}} param0
 */
function NotesContextProvider({ children, storage }) {
  const [notes, setNotes] = useState(storage.load())

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
   * @param {boolean} done
   */
  function switchNoteStatus(id, done) {
    const updatedNotes = notes.map((el) => {
      if (el.id === id) return { ...el, done }
      return el
    })
    setNotes(updatedNotes)
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

export { NotesContext, NotesContextProvider }
