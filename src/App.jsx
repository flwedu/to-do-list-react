import React from "react"
import InputField from "./components/InputField"
import NotesList from "./components/NotesList"

function App() {
  return (
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
  )
}

export default App
