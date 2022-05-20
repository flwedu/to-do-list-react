import React from "react"
import InputField from "./components/InputField"
import NotesList from "./components/NotesList"
import { NotesContextProvider } from "./providers/NotesProvider"
import LocalStorageService from "./service/local-storage.js"

function App() {
  const storage = new LocalStorageService("notes")

  return (
    <NotesContextProvider storage={storage}>
      <div className="App">
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <div className="body">
            <InputField />
            <NotesList />
          </div>
        </div>
      </div>
    </NotesContextProvider>
  )
}

export default App
