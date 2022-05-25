import { createContext, useEffect, useState } from "react"
import NoteObject from "../model/NoteObject"
import LocalStorageService from "../service/local-storage"

const NotesContext = createContext<ContextType | null>(null)

type ContextType = {
  notes: NoteObject[]
  addNoteWithText: (text: string) => void
  switchNoteStatus: (id: string, done: boolean) => void
  deleteNote: (id: string) => void
}
function NotesContextProvider({
  children,
  storage,
}: {
  children: JSX.Element
  storage: LocalStorageService
}) {
  const [notes, setNotes] = useState(storage.load())

  useEffect(() => {
    storage.save(notes)
  }, [notes])

  function addNoteWithText(text: string) {
    const note = new NoteObject(text)
    setNotes([...notes, note])
  }

  function switchNoteStatus(id: string, done: boolean) {
    const updatedNotes = notes.map((el: NoteObject) => {
      if (el.id === id) return { ...el, done }
      return el
    })
    setNotes(updatedNotes)
  }

  function deleteNote(id: string) {
    setNotes(notes.filter((note: NoteObject) => note.id !== id))
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
