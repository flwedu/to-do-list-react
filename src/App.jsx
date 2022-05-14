import { useState } from "react";
import Item from "./components/Item";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleTextChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  function addItem(event) {
    event.preventDefault();
    setItems([...items, inputText]);
    setInputText("");
  }

  function renderItem(text) {
    return <Item text={text} />;
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
            <button onClick={addItem}>Add</button>
          </div>
          <div className="itemsList">
            <ul>{items.map(renderItem)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
