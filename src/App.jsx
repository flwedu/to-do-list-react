import { useState } from "react";
import Note from "./components/Note";

function App() {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  function handleTextChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  function addNote(event) {
    event.preventDefault();
    setNotes([...notes, inputText]);
    setInputText("");
  }

  function renderNote(text) {
    return <Note text={text} />;
  }

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="body">
          <div className="text_input">
            <input
              type="text"
              name="text"
              id="text"
              onChange={handleTextChange}
              value={inputText}
            />
            <button onClick={addNote}>Add</button>
          </div>
          <div className="NotesList">
            <ul>{notes.map(renderNote)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
